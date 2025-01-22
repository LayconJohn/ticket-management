import crypto from 'crypto';
// import { v4 as uuidv4 } from "uuid";

export default class TicketService {
    openTicket (requesterId: string, content: string) {
        const ticketId = crypto.randomUUID()
        const ticket = {
            ticketId,
            requesterId, 
            content,
            status: "open"
        }

    }

    assignTicket() {}

    closeTicket() {}

    exportTicket() {}

    imporTicket(){}

    getticket(){}
}