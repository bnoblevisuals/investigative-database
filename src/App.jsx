import { useState } from 'react'
import './styles/tokens.css'
import './styles/bwc.css'
import MenuBar from "./components/MenuBar";
import StatusBar from "./components/StatusBar";
import Workspace from "./components/Workspace";

const MENUS = ["File", "Edit","View","Records","Query","System"];
function App() {
  const [statusMessage, setStatusMessage] = useState("READY");
  const handleMenuClick = (menuName) => 
    {setStatusMessage(`${menuName.toUpperCase()} MENU SELECTED`);
        if(menuName==="System") {
          setWorkspaeCommand({
            type: "OPEN_BATCOMPUTER",
            issuedAt: Date.now()
          });
        }
        if (menuName==="Records"){
          setWorkspaeCommand({
            type: "OPEN_PERSON_PROFILE",
            issuedAt: Date.now()
          });
        }
      }
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