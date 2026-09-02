import {useEffect, useState} from "react";
import DatabaseWindow from "../windows/DatabaseWindow";
import PersonProfileWindow from "../windows/PersonProfileWindow";
import BatcomputerWindow from "../windows/BatcomputerWindow";

function Workspace({command, onStatusChange}) {
    const [showBatcomputerWindow, setShowBatcomputerWindow] = useState(true);
    const [showPersonProfileWindow, setShowPersonProfileWindow] = useState(false);
    useEffect(() => {
        if(!command) {
            return;
        }

        if(command.type === "OPEN_BATCOMPUTER") {
            setShowBatcomputerWindow(true);
            onStatusChange("BATCOMPUTER OPENED")
            
        }
        if(command.type ==="OPEN_PERSON_PROFILE") {
            setShowPersonProfileWindow(true);
            onStatusChange("PERSON_PROFILE OPENED")
        }
    
    },[command]);
    const BATCOMPUTER_WINDOW = {
        id: "BATCOMPUTER",
        title: "BATCOMPUTER",
        top: 20,
        left: 20
    };
    const closePersonProfileWindow = () => {
        setShowPersonProfileWindow(false);
        onStatusChange("PERSON_PROFILE CLOSED");
    };
    const closeBatcomputerWindow = () => {
        setShowBatcomputerWindow(false);
        onStatusChange("BATCOMPUTER CLOSED")
    }
    return (
        <main className="workspace">
        {showBatcomputerWindow && (
        <BatcomputerWindow 
        onClose={closeBatcomputerWindow}/>
        )}
        
        {showPersonProfileWindow && (
           <PersonProfileWindow onStatusChange
        ={onStatusChange}
        onClose={closePersonProfileWindow} />)}
        </main>
      );
}

export default Workspace;