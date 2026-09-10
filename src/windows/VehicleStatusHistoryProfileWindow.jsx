import DatabaseWindow from "./DatabaseWindow";
import vehicleStatusHistoryProfile from "../data/vehicleStatusHistoryProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { VEHICLE_STATUS_HISTORY } from "../data/tableColumns";

function VehicleStatusHistoryProfileWindow({ onClose, onStatusChange }){


    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W011}
        tableName="VEHICLE_STATUS_HISTORY"
        columns={VEHICLE_STATUS_HISTORY}
        rows={vehicleStatusHistoryProfile}
        getRowId={(vehicleStatusHistory) => vehicleStatusHistory.vehicleStatusHistoryId}
        selectionId = "VEHICLE_STATUS_HISTORY"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default VehicleStatusHistoryProfileWindow;