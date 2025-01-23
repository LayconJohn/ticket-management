import Ticket from "../../domain/entity/Ticket"

export default class OpenTicket {
    async execute(input: Input): Promise<Output> {
        const ticket = await Ticket.create(input.requesterId, input.content);
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

