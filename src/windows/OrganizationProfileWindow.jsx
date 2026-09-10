import DatabaseWindow from "./DatabaseWindow";
import organizationProfile from "../data/organizationProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { ORGANIZATION } from "../data/tableColumns";

function OrganizationProfileWindow({ onClose, onStatusChange}){
    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W005}
        tableName="ORGANIZATION"
        columns = { ORGANIZATION }
        rows = {organizationProfile}
        getRowId={(organization) => organization.organizationId}
        selectId = "ORGANIZATION"
        onStatusChange = {onStatusChange}
        onClose = {onClose}
        />
    );
    
}
export default OrganizationProfileWindow;