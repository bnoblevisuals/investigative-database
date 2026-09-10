import DatabaseWindow from "./DatabaseWindow";
import WINDOW_REGISTRY from "../data/windowRegistry";

function AboutSystemWindow({onClose}) {
    const config = WINDOW_REGISTRY.W001;
    return (
        <DatabaseWindow
        id={config.id}
        title={config.title}
        top={config.top}
        left={config.left}
        onClose={onClose}>
        <p>BWC/4D DATABASE CLIENT</p>
        <p>VERSION 1.0.0.NE</p>
        <p>DATABASE STATUS: ONLINE</p>
        </DatabaseWindow>
    );
}

export default AboutSystemWindow;