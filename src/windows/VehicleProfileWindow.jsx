import DatabaseWindow from "./DatabaseWindow";
import vehicleProfile from "../data/vehicleProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { VEHICLE } from "../data/tableColumns";

function VehicleProfileWindow({ onClose, onStatusChange }){


    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W010}
        tableName="VEHICLE"
        columns={VEHICLE}
        rows={vehicleProfile}
        getRowId={(vehicle) => vehicle.vehicleId}
        selectionId = "VEHICLE"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default VehicleProfileWindow;