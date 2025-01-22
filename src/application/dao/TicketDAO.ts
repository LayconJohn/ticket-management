export default interface TickerDAO {
    save(ticketDTO: SaveInput): Promise<void> 
    get(ticketId: string): Promise<any>
    update(ticket: UpdateInput): Promise<void>
}

type SaveInput = {
    ticketId: string,
    requesterId: string,
    content: string,
    startDate: Date,
    status: string
}

type UpdateInput = {
    ticketId: string,
    requesterId: string,
    assigneeId: string,
    content: string,
    startDate: Date,
    status: string
}