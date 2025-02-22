import crypto from 'crypto';
import TicketDAO from '../dao/TicketDAO';
// import { v4 as uuidv4 } from "uuid";

export default class TicketService {

    constructor(
        readonly ticketDAO: TicketDAO
    ){}

    async openTicket (requesterId: string, content: string) {
        const ticketId = crypto.randomUUID()
        //DTO: Data Transfer Object 
        const ticket = {
            ticketId,
            requesterId, 
            content,
            startDate: new Date(),
            status: "open"
        }
        await this.ticketDAO.save(ticket);

    }

    async assignTicket(ticketId: string, assigneeId: string) {
        const ticket = await this.ticketDAO.get(ticketId);
        ticket.assigneeId = assigneeId;
        ticket.status = "assigned"
        await this.ticketDAO.update(ticket);
    }

    async closeTicket(ticketId: string) {
        //Table Model: const ticket = await pg.query("SELECT * FROM john.ticket WHERE ticket_id = $", [ticketId])
        const ticket = await this.ticketDAO.get(ticketId);
        if(ticket.status === "open") throw new Error("Ticket is not Assigned")
        if(ticket.status === "closed") throw new Error("Ticket is already closed")    
        ticket.status = "closed";
        ticket.endDate = new Date();
        ticket.duration = ticket.endDate.getTime() - ticket.startDate.getTime();
        //Table model: await pg.query("UPDATE ticket WHERE ticket_id = $", [ticketId]")
        await this.ticketDAO.update(ticket);
    }

    exportTicket() {}

    imporTicket(){}

    getticket(){}
}