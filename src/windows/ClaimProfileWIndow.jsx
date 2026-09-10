import DatabaseWindow from "./DatabaseWindow";
import claimProfile from "../data/claimProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { CLAIM } from "../data/tableColumns";

function ClaimProfileWindow({onClose, onStatusChange}){
    return (
        <DatabaseWindow
       
        config={WINDOW_REGISTRY.W007}
        tableName="CLAIM"
        columns={CLAIM}
        rows={claimProfile}
        getRowId={(claim) => claim.claimId}
        selectionId = "CLAIM"
        onStatusChange={onStatusChange}
        onClose={onClose}
        
        />
    );
}

export default ClaimProfileWindow;