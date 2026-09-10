import DatabaseWindow from "./DatabaseWindow";
import threatAssessmentProfile from "../data/threatAssessmentProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { THREAT_ASSESSMENT } from "../data/tableColumns";

function ThreatAssessmentProfileWindow({onClose,onStatusChange}){

    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W014}
        tableName="THREAT_ASSESSMENT"
        columns={THREAT_ASSESSMENT}
        rows={threatAssessmentProfile}
        getRowId={(threatAssessment) => threatAssessment.threatAssessmentId}
        selectionId = "THREAT_ASSESSMENT"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default ThreatAssessmentProfileWindow;