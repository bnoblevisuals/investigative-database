import {useState} from "react";
function MenuBar({ menus, onMenuClick, onMenuItemClick }) {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (menu) => {
        onMenuClick(menu.label);
        if (!menu.items) {
            setOpenMenu(null);
            return;
        }

        setOpenMenu((current) => 
            current === menu.label ? null : menu.label
        );
    };
    const handleMenuItemClick = (item) => {
        onMenuItemClick(item);
        setOpenMenu(null);
    };
    
    return (
        <nav className="menu-bar" aria-label="Application menu">
            {menus.map((menu) => (
                <div className="menu-group" key={menu.label}>
                <button
                type="button"
                onClick={() => handleMenuClick(menu)}
                aria-expanded={
                    menu.items ? openMenu === menu.label : undefined
                }
                >
                    {menu.label}
                </button>
                {menu.items && openMenu === menu.label && (
                    <div className="menu-dropdown">
                        {menu.items.map((item) => (
                        <button
                            key={item.command}
                            type="button"
                            onClick={() => handleMenuItemClick(item)}
                        >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )
                }
            </div>
            ))}
        </nav>
    );
}

export default MenuBar;