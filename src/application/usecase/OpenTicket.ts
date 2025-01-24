import Ticket from "../../domain/entity/Ticket"
import TicketRepository from "../repository/TicketRepository";

export default class OpenTicket {

    constructor(
        readonly ticketRepository: TicketRepository
    ) {}

    async execute(input: Input): Promise<Output> {
        const ticket = Ticket.create(input.requesterId, input.content);
        await this.ticketRepository.save(ticket);
        return {
            ticketId: ticket.ticketId
        }
    }
}

type Input = {
    requesterId: string,
    content: string
}

type Output = {
    ticketId: string
}

