import DatabaseWindow from "./DatabaseWindow";
import timelineEventProfile from "../data/timelineEventProfile";
import WINDOW_REGISTRY from "../data/windowRegistry";
import { TIMELINE_EVENT } from "../data/tableColumns";

function TimelineEventProfileWindow({ onClose, onStatusChange }){


    return (
        <DatabaseWindow
        config={WINDOW_REGISTRY.W012}
        tableName="TIMELINE_EVENT"
        columns={TIMELINE_EVENT}
        rows={timelineEventProfile}
        getRowId={(timelineEvent) => timelineEvent.timelineEventId}
        selectionId = "TIMELINE_EVENT"
        onStatusChange={onStatusChange}
        onClose={onClose}
        />
    );
}

export default TimelineEventProfileWindow;