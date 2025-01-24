import crypto from "crypto";

export default class Ticket {
    assignedId?: string;

    constructor(
        readonly ticketId: string,
        readonly requesterId: string,
        readonly content: string,
        readonly startDate: Date,
        private status: string
    ) {}

    static create(requesterId: string, content: string) {
        const ticketId = crypto.randomUUID();
        const startDate = new Date();
        const status = "open";
        return new Ticket(ticketId, requesterId, content, startDate, status);
    }

    assign(assignedId: string) {
        this.status = "assigned";
        this.assignedId = assignedId;

    }
}