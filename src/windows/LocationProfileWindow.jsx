import DatabaseWindow from "./DatabaseWindow";
import locationProfile from "../data/locationProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { LOCATION } from "../data/tableColumns";

function LocationProfileWindow({ onClose, onStatusChange }){


    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W003}
        tableName="LOCATION"
        columns={LOCATION}
        rows={locationProfile}
        getRowId={(location) => location.locationId}
        selectionId = "LOCATION"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default LocationProfileWindow;