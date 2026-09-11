import { useState} from "react";
import DatabaseWindow from "../windows/DatabaseWindow";
import DataTable from "../components/DataTable";

function DataTableWindow({
    config,
    tableName,
    columns,
    rows,
    getRowId,
    selectionLabel,
    onStatusChange,
    onClose
}) {
    const [selectedRowId, setSelectedRowId] = useState(null);

    const selectRow = (rowId) => {
        setSelectedRowId(rowId);
        onStatusChange(`${selectionLabel} SELECTED: ${rowId}`);
    };

    return (
        <DatabaseWindow
            id={config.id}
            title={config.title}
            top={config.top}
            left={config.left}
            onClose={onClose} 
        >
            <div className="table-summary">
                <span>TABLE: {tableName}</span>
                <span>RECORDS: {rows.length}</span>
            </div>
            <div className="table-container">
                <DataTable
                    columns={columns}
                    rows={rows}
                    selectedRowId={selectedRowId}
                    onSelectRow={selectRow}
                    getRowId={getRowId} 
                />
            </div>
            <p>SELECTED: {selectedRowId ?? "NONE"}</p>
        </DatabaseWindow>
    );
}

export default DataTableWindow;