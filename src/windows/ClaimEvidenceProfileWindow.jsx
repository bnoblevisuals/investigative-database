import DatabaseWindow from "./DatabaseWindow";
import claimEvidenceProfile from "../data/claimEvidenceProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import {CLAIM_EVIDENCE} from "../data/tableColumns";

function ClaimEvidenceProfileWindow({onClose,onStatusChange}){
    return (
        <DatabaseWindow 
        config={WINDOW_REGISTRY.W018}
        tableName="CLAIM_EVIDENCE"
        columns={CLAIM_EVIDENCE}
        rows={claimEvidenceProfile}
        getRowId={(claimEvidence) => claimEvidence.claimEvidenceId}
        selectionId = "CLAIM_EVIDENCE"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default ClaimEvidenceProfileWindow;