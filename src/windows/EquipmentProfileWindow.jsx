import DatabaseWindow from "./DatabaseWindow";
import equipmentProfile from "../data/equipmentProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { EQUIPMENT } from "../data/tableColumns";

function equipmentProfileWindow({ onClose, onStatusChange }){


    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W009}
        tableName="EQUIPMENT"
        columns={EQUIPMENT}
        rows={equipmentProfile}
        getRowId={(equipment) => equipment.equipmentId}
        selectionId = "EQUIPMENT"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default equipmentProfileWindow;