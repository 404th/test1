import { Avatar, Button } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./style.css";

function Follower() {
    return (
        <div className={"follwer_container"}>
            <div className={"follwer_container_ava"}>
                <Avatar
                    shape="square"
                    size={48}
                    icon={<img src="./images/avatar.png" alt="ava" />}
                />
            </div>
            <div className={"follwer_container_info"}>
                <span className={"follower_container_info_title"}>
                    Jamshid Umarxonov
                </span>
                <span className={"follower_container_info_secondary"}>
                    <EnvironmentOutlined />
                    <span
                        className={"follower_container_info_secondary_location"}
                    >
                        Tashkent
                    </span>
                </span>
            </div>
            <div className={"follwer_container_button"}>
                <Button
                    className={"follwer_container_button_btn"}
                    type="primary"
                >
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default Follower;
