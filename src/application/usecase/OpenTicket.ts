import Ticket from "../../domain/entity/Ticket"
import Queue from "../../infra/queue/Queue";
import TicketRepository from "../repository/TicketRepository";

export default class OpenTicket {

    constructor(
        readonly ticketRepository: TicketRepository,
        readonly queue: Queue
    ) {}

    async execute(input: Input): Promise<Output> {
        const ticket = Ticket.create(input.requesterId, input.content);
        await this.ticketRepository.save(ticket);

        await this.queue.publish("ticketOpened", ticket);
        // await this.queue.publish("processPayment", ticket);
        // await this.queue.publish("integrateWithTrello", ticket);
        // await this.queue.publish("sendEmail", ticket);

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

