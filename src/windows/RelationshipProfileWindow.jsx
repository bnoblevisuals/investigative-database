import DatabaseWindow from "./DatabaseWindow";
import relationshipProfile from "../data/relationshipProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { RELATIONSHIP } from "../data/tableColumns";

function RelationshipProfileWindow({}){
    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W006}
        tableName="RELATIONSHIP"
        columns = {RELATIONSHIP}
        rows = {relationshipProfile}
        getRowId = {(relationship) => relationship.relationshipId}
        selectionId = "RELATIONSHIP"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}
export default RelationshipProfileWindow