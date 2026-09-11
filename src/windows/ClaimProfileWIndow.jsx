import DataTableWindow from "./DataTableWindow";
import claimProfile from "../data/claimProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { CLAIM } from "../data/tableColumns";

function ClaimProfileWindow({onClose, onStatusChange}){
    return (
        <DataTableWindow
       
        config={WINDOW_REGISTRY.W007}
        tableName="CLAIM"
        columns={CLAIM}
        rows={claimProfile}
        getRowId={(claim) => claim.claimId}
        selectionLabel = "CLAIM"
        onStatusChange={onStatusChange}
        onClose={onClose}
        
        />
    );
}

export default ClaimProfileWindow;