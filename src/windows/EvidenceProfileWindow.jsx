import DatabaseWindow from "./DatabaseWindow";
import evidenceProfile from "../data/evidenceProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { EVIDENCE } from "../data/tableColumns";

function evidenceProfileWindow({ onClose, onStatusChange }){


    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W008}
        tableName="EVIDENCE"
        columns={EVIDENCE}
        rows={evidenceProfile}
        getRowId={(evidence) => evidence.evidenceId}
        selectionId = "EVIDENCE"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default evidenceProfileWindow;