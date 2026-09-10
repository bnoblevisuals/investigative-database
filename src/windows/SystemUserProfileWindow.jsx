import DatabaseWindow from "./DatabaseWindow";
import systemUserProfile from "../data/systemUserProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import {SYSTEM_USER} from "../data/tableColumns";

function SystemUserProfileWindow({onClose,onStatusChange}){
    return (
        <DatabaseWindow 
        config={WINDOW_REGISTRY.W015}
        tableName="SYSTEM_USER"
        columns={SYSTEM_USER}
        rows={systemUserProfile}
        getRowId={(systemUser) => systemUser.systemUserId}
        selectionId = "SYSTEM_USER"
        onStatusChange={onStatusChange}
        onClose={onClose}
        
        
        />
    );
}

export default SystemUserProfileWindow;