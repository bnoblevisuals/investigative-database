import DatabaseWindow from "./DatabaseWindow";

function BatcomputerWindow({onClose}) {
    return (
        <DatabaseWindow
        id="BATCOMPUTER"
        title="BATCOMPUTER"
        top={20}
        left={20}
        onClose={onClose}>
        <p>BWC/4D DATABASE CLIENT</p>
        <p>VERSION 1.0.0.NE</p>
        <p>DATABASE STATUS: ONLINE</p>
        </DatabaseWindow>
    );
}

export default BatcomputerWindow;