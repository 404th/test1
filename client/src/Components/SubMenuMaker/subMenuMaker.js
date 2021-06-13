import { Menu } from "antd";

function SubMenuMaker(props) {
    return (
        <>
            <div className={"container_menu_title"}>
                <h4 className={"container_menu_title_h4"}>General</h4>
            </div>
            <Menu.SubMenu
                className={"container_menu_submenu"}
                key={props.key1}
                icon={
                    <img
                        src={"./images/icon.png"}
                        alt="just ikonka"
                        width={"24px"}
                        height={"24px"}
                    />
                }
                title="Users"
            >
                <Menu.Item
                    className={"container_menu_submenu_item"}
                    key={props.key2}
                >
                    option1
                </Menu.Item>
                <Menu.Item
                    className={"container_menu_submenu_item"}
                    key={props.key3}
                >
                    option2
                </Menu.Item>
                <Menu.Item
                    className={"container_menu_submenu_item"}
                    key={props.key4}
                >
                    option3
                </Menu.Item>
                <Menu.Item
                    className={"container_menu_submenu_item"}
                    key={props.key5}
                >
                    option4
                </Menu.Item>
            </Menu.SubMenu>
        </>
    );
}

export default SubMenuMaker;
