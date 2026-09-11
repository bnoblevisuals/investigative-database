import { useState } from 'react'
import './styles/tokens.css'
import './styles/bwc.css'
import MenuBar from "./components/MenuBar";
import StatusBar from "./components/StatusBar";
import Workspace from "./components/Workspace";
import COMMAND_TYPES from './data/commandTypes';
import WINDOW_REGISTRY from './data/windowRegistry';

const RECORD_MENU_ITEMS = Object.values(WINDOW_REGISTRY)
.filter((window) => window.menu === "Records")
.map((window) => ({
  label: window.title,
  command: window.command
}));

const MENUS = [
  {label:"File"},
   {label:"Edit"},
   {label:"View"},
   {label:"Records",items:RECORD_MENU_ITEMS},
   {label:"Query"},
   {label:"System"}
  ];
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
  const handleMenuClick = (menuName) => {
    setStatusMessage(`${menuName.toUpperCase()} MENU SELECTED`);
  };

  const handleMenuItemClick = (item) => {
    setStatusMessage(`${item.label} SELECTED`);
    sendCommand(item.command);
  }


  const [workspaceCommand, setWorkspaeCommand] = useState(null);

  return (
    <div className="app-shell">
      <div className="application-frame">

        <MenuBar menus={MENUS}
         onMenuClick={handleMenuClick}
         onMenuItemClick={handleMenuItemClick}
        />
          <Workspace command={workspaceCommand}
          onStatusChange={setStatusMessage}/>
          <StatusBar message={statusMessage} />
      </div>
    </div>
  );
}

export default App;