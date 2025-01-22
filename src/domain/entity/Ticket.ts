import crypto from "crypto";

export default class Ticket {
    constructor(
        readonly ticketId: string,
        readonly requesterId: string,
        readonly content: string,
        readonly startDate: Date,
        readonly status: string,
        // readonly assigneeId?: string
    ) {}

    static create(requesterId: string, content: string) {
        const ticketId = crypto.randomUUID();
        const startDate = new Date();
        const status = "open";
        return new Ticket(ticketId, requesterId, content, startDate, status);
    }
}