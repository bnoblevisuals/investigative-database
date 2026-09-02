function MenuBar({ menus, onMenuClick}) {
    return (
        <nav className = "menu-bar" aria-label="Application menu">
            {menus.map((menu) =>(
                <button
                key={menu}
                type="button"
                onClick={() => onMenuClick(menu)}>{menu}</button>
            ))}
        </nav>
    );
}

export default MenuBar;