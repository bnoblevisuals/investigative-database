
function DataTable({
    columns,rows,selectedRowId,onSelectRow, getRowId
}) {
    return (
        <table className="data-table">
            <thead>
                <tr>
                    {columns.map((column) =>(
                        <th key ={column.field}>
                        {column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => {
                    const rowId = getRowId(row);
                    return (
                        <tr
                        key={rowId}
                        tabIndex={0}
                        onClick={() => onSelectRow(rowId)}
                        onKeyDown={(event) => {
                            if(event.key === "Enter") {
                                onSelectRow(rowId);
                            }
                        }}
                        className={
                            selectedRowId === rowId 
                            ? "selected-row" 
                            : ""
                        }Pers>
                            {columns.map((column) => (
                                <td key={column.field}>
                                    {row[column.field]}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default DataTable;