import Ticket from "../../domain/entity/Ticket";

export default interface TicketRepository {
    save(ticket: Ticket): Promise<void>
}