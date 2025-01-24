import TicketRepository from "../repository/TicketRepository";

export default class AssignTicket {

    constructor(
        readonly ticketRepository: TicketRepository
    ){}
    async execute(input: Input): Promise<void> {
        const ticket = await this.ticketRepository.get(input.ticketId);
        ticket.assign(input.assigneeId);
        // ticket.assignedId = input.assigneeId; Diferença de Transaction script
        await this.ticketRepository.update(ticket);        
    }
}

type Input = {
    assigneeId: string,
    ticketId: string
}