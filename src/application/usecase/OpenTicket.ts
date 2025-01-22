export default class OpenTicket {
    async execute(input: Input): Promise<Output> {
        const ticket = await Ticket.create() 
    }
}

type Input = {
    requesterId: string,
    content: string
}

type Output = {
    ticketId: string
}