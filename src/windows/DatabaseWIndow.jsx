 const DEFAULT_WINDOW_POS = {top: 20,left: 20};

function DatabaseWindow({id,title, children, onClose,
    top= DEFAULT_WINDOW_POS.top,
    left=DEFAULT_WINDOW_POS.left
}) {
 const windowTitle = title.toUpperCase();
    return (
        <div className="database-window"
        data-window-id={id}
        style={{top,left}}>
            <div className="database-window-titlebar">
                <span>{windowTitle}</span>
                <button className="windows-close-button" type="button"
                aria-label={`Close ${windowTitle}`}
                onClick={onClose}>X</button>
            </div>
            <div className="database-window-content">
                {children}
            </div>
        </div>
    
           
      
    );
}

export default DatabaseWindow;