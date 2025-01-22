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

    assignTicket() {}

    closeTicket() {}

    exportTicket() {}

    imporTicket(){}

    getticket(){}
}