import DatabaseWindow from "./DatabaseWindow";
import recordAuditProfile from "../data/recordAuditProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import {RECORD_AUDIT} from "../data/tableColumns";

function RecordAuditProfileWindow({onClose,onStatusChange}){
    return (
        <DatabaseWindow 
        config={WINDOW_REGISTRY.W016}
        tableName="RECORD_AUDIT"
        columns={RECORD_AUDIT}
        rows={recordAuditProfile}
        getRowId={(recordAudit) => recordAudit.recordAuditId}
        selectionId = "RECORD_AUDIT"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default RecordAuditProfileWindow;