import DatabaseWindow from "./DatabaseWindow";
import personProfile from "../data/personProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { PERSON } from "../data/tableColumns";

function PersonProfileWindow({onStatusChange,onClose}){
    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W002}
        tableName="PERSON"
        columns={PERSON}
        rows={personProfile}
        getRowId={(person) => person.personId}
        selectionLabel = "PERSON"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default PersonProfileWindow;
