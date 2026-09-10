import DatabaseWindow from "./DatabaseWindow";
import incidentProfile from "../data/incidentProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { INCIDENT } from "../data/tableColumns";
function IncidentProfileWindow({ onStatusChange, onClose }) {
    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W004}
        tableName="INCIDENT"
        columns={INCIDENT}
        rows={incidentProfile}
        getRowId={(incident) => incident.incidentId}
        selectionlabel = "INCIDENT"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default IncidentProfileWindow;