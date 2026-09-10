import DatabaseWindow from "./DatabaseWindow";
import inventoryProfile from "../data/inventoryProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import {INVENTORY_ITEM} from "../data/tableColumns";

function InventoryItemProfileWindow({onClose,onStatusChange}){
    return (
        <DatabaseWindow 
        config={WINDOW_REGISTRY.W019}
        tableName="INVENTORY_ITEM"
        columns={INVENTORY_ITEM}
        rows={inventoryProfile}
        getRowId={(inventory) => inventory.inventoryId}
        selectionId = "INVENTORY_ITEM"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}
export default InventoryItemProfileWindow;