import DatabaseWindow from "./DatabaseWindow";
import eventParticipantProfile from "../data/eventParticipantProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { EVENT_PARTICIPANT } from "../data/tableColumns";

function EventParticipantProfileWindow({ onClose, onStatusChange }){


    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W013}
        tableName="EVENT_PARTICIPANT"
        columns={EVENT_PARTICIPANT}
        rows={eventParticipantProfile}
        getRowId={(eventParticipant) => eventParticipant.eventParticipantId}
        selectionId = "EVENT_PARTICIPANT"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default EventParticipantProfileWindow;