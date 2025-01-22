export default interface TickerDAO {
    save(ticketDTO: SaveInput): Promise<void> 
}

type SaveInput = {
    ticketId: string,
    requesterId: string,
    content: string,
    startDate: Date,
    status: string
}