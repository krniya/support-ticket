import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";
import NoteItem from "../components/NoteItem";
import Spinner from "../components/Spinner";
import { getNotes, reset as noteReset } from "../features/notes/noteSlice";
import { closeTicket, getTicket, reset } from "../features/tickets/ticketSlice";

function Ticket() {
    const { ticket, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.tickets
    );
    const { notes, isLoading: notesIsLoading } = useSelector((state) => state.notes);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ticketId } = useParams();
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        dispatch(getTicket(ticketId));
        dispatch(getNotes(ticketId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isError, message, ticketId]);

    const onTicketClose = () => {
        dispatch(closeTicket(ticketId));
        toast.success("Ticket Closed");
        navigate("/tickets");
    };

    if (isLoading || notesIsLoading) {
        return <Spinner />;
    }

    if (isError) {
        <h3>Something went wrong</h3>;
    }

    return (
        <div className="ticket-page">
            <header className="ticket-header">
                <BackButton url="/tickets" />
                <h2>
                    Ticket ID: {ticket._id}
                    <span className={`status status-${ticket.status}`}>{ticket.status}</span>
                </h2>
                <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString("en-US")}</h3>
                <h3>Product: {ticket.product}</h3>
                <hr />
                <div className="ticket-desc">
                    <h3>Description of Issue</h3>
                    <p>{ticket.description}</p>
                </div>
                <h2> Notes </h2>
                {notes.map((note) => (
                    <NoteItem key={note._id} note={note} />
                ))}
            </header>
            {ticket.status !== "closed" && (
                <button onClick={onTicketClose} className="btn btn-block btn-danger">
                    Close Ticket
                </button>
            )}
        </div>
    );
}

export default Ticket;
