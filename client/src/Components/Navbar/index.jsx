import { Layout, Badge, Avatar } from "antd";
import { Input, Button, Tooltip } from "antd";
import { SearchOutlined, SettingFilled, BellOutlined } from "@ant-design/icons";

// const { Input } = Input;
const { Header } = Layout;

function Navbar() {
    return (
        <Header
            className="site-layout-sub-header-background header_background"
            style={{ padding: 0 }}
        >
            <div className={"header_navbar_container"}>
                <Input
                    className={"header_navbar_container_search"}
                    allowClear
                    style={{ width: "100%" }}
                    prefix={<SearchOutlined />}
                />
                <div className={"header_navbar_container_buttons"}>
                    <div
                        className={
                            "header_navbar_container_buttons_button_cover"
                        }
                    >
                        <Tooltip title="search">
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<SettingFilled />}
                            />
                        </Tooltip>
                    </div>
                    <div
                        className={
                            "header_navbar_container_buttons_button_cover"
                        }
                    >
                        <Badge count={0} showZero>
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<BellOutlined />}
                            />
                        </Badge>
                    </div>
                    <div
                        className={
                            "header_navbar_container_buttons_button_cover"
                        }
                    >
                        <Tooltip title="search">
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<SettingFilled />}
                            />
                        </Tooltip>
                    </div>
                    <div
                        className={"header_navbar_container_buttons_ava_cover"}
                    >
                        <Avatar
                            size={44}
                            icon={<img src={"./images/avatar.png"} alt="ava" />}
                        />
                    </div>
                </div>
            </div>
        </Header>
    );
}

export default Navbar;
