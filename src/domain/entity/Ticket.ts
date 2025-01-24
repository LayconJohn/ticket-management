import crypto from "crypto";

export default class Ticket {
    assignedId?: string;
    endDate?: Date;
    duration?: number;

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

    close() {
        if(this.status === "open") throw new Error("Ticket is not Assigned");
        if(this.status === "closed") throw new Error("Ticket is already closed");
        this.status = "closed";
        this.endDate = new Date()
        this.duration = this.endDate.getTime() - this.startDate.getTime();
    }
}