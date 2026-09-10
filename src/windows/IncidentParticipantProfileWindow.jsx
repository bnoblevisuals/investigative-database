import DatabaseWindow from "./DatabaseWindow";
import incidentParticipantProfile from "../data/incidentParticipantProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import {INCIDENT_PARTICIPANT} from "../data/tableColumns";

function IncidentParticipantProfileWindow({onClose,onStatusChange}){
    return (
        <DatabaseWindow 
        config={WINDOW_REGISTRY.W017}
        tableName="INCIDENT_PARTICIPANT"
        columns={INCIDENT_PARTICIPANT}
        rows={incidentParticipantProfile}
        getRowId={(incidentParticipant) => incidentParticipant.incidentParticipantId}
        selectionId = "INCIDENT_PARTICIPANT"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default IncidentParticipantProfileWindow;