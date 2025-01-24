import Queue from "../../infra/queue/Queue";

export default class ImporTicket {
    
    constructor(
        readonly queue: Queue
    ) {}

    async execute(input: Input): Promise<void> {
        for(const ticketInput of input.tickets) {
            this.queue.publish("openTicket", ticketInput)
        }
    }
}

type Input = {
    tickets: {
        requesterId: string,
        content: string
    }[]
}