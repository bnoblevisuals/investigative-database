import { useState } from 'react'
import './styles/tokens.css'
import './styles/bwc.css'
import MenuBar from "./components/MenuBar";
import StatusBar from "./components/StatusBar";
import Workspace from "./components/Workspace";
import COMMAND_TYPES from './data/commandTypes';
const MENUS = ["File", "Edit","View","Records","Query","System"];
const MENU_COMMANDS = {
  System: COMMAND_TYPES.OPEN_ABOUT_SYSTEM,
  Records: COMMAND_TYPES.OPEN_PERSON_PROFILE,
  View: COMMAND_TYPES.OPEN_LOCATION_PROFILE,
  Edit: COMMAND_TYPES.OPEN_INCIDENT_PROFILE
};

function App() {
  const [statusMessage, setStatusMessage] = useState("READY");
  const sendCommand = (type) => {
    setWorkspaeCommand({
      type,
      issuedAt: Date.now()
    });
  }
  const handleMenuClick = (menuName) => 
    {setStatusMessage(`${menuName.toUpperCase()} MENU SELECTED`);
    const commandType = MENU_COMMANDS[menuName];  
  if (commandType) {
    sendCommand(commandType);
  } 
};
  const [workspaceCommand, setWorkspaeCommand] = useState(null);

  return (
    <div className="app-shell">
      <div className="application-frame">

        <MenuBar menus={MENUS} onMenuClick={handleMenuClick}/>
          <Workspace command={workspaceCommand}
          onStatusChange={setStatusMessage}/>
          <StatusBar message={statusMessage} />
      </div>
    </div>
  );
}

export default App;