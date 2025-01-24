import Ticket from "../../domain/entity/Ticket";
import TicketRepository from "../repository/TicketRepository";

export default class ImporTicket {
    
    constructor(
        readonly ticketRepository: TicketRepository
    ) {}

    async execute(input: Input): Promise<void> {
        for(const ticketInput of input.tickets) {
            const ticket = await Ticket.create(ticketInput.requesterId, ticketInput.content);
            await this.ticketRepository.save(ticket);
        }
    }
}

type Input = {
    tickets: {
        requesterId: string,
        content: string
    }[]
}