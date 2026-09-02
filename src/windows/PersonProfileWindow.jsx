import {useState} from "react";
import DatabaseWindow from "./DatabaseWindow";
import personProfile from "../data/personProfile";

function PersonProfileWindow({onStatusChange,onClose}){
    const recordCount = personProfile.length;
    const firstRecord = personProfile[0];
    const [selectedPersonId,setSelectedPersonId] = useState(null);
    const selectPerson = (personId) => {
        setSelectedPersonId(personId);
        onStatusChange(`PERSON SELECTED: ${personId}`);
    };
    
    return (
        <DatabaseWindow
        id="PERSON_PROFILE"
        title="PERSON_PROFILE"
        top={200}
        left={200}
        onClose={onClose}
        >
            <p>RECORDS: {recordCount}</p>
       <table className="data-table">
        <thead>
            <tr>
                <th>PERSON_ID</th>
                <th>DISPLAY_NAME</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
            {personProfile.map((person) => (
                <tr key={person.personId}
                tabIndex={0}
                onClick={() => selectPerson(person.personId)}
                onKeyDown={(event) => {
                    if(event.key === "Enter") {
                        selectPerson(person.personId);
                    }
                }}
                className={selectedPersonId === person.personId
                    ? "selected-row" 
                    : ""
                }>
                    <td>{person.personId}</td>
                    <td>{person.displayName}</td>
                    <td>{person.status}</td>
                </tr>
                
            ))}
        </tbody>
       </table>
       <p>SELECTED: {selectedPersonId ?? "NONE"}</p>
        </DatabaseWindow>
    );
}

export default PersonProfileWindow;
