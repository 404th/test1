// import LayoutRoutes from "./layout";
import Navbar from "./Components/Navbar";
import { Layout, Breadcrumb, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./App.css";
import HomeSide from "./Components/HomeSide";
import Follower from "./Components/Follower";
import { Link } from "react-router-dom";

// const { Input } = Input;
const { Content, Footer } = Layout;

function App() {
    return (
        <>
            <Layout className={"container_layout"}>
                <HomeSide />
                <Layout>
                    <Navbar />
                    <Content style={{ margin: "24px 16px 0" }}>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                                color: "white",
                            }}
                        >
                            <div className={"content_container"}>
                                <h3 className={"content_container_title"}>
                                    Profile
                                </h3>
                                <Breadcrumb
                                    className={"content_container_breadcrumb"}
                                >
                                    <Breadcrumb.Item>Link 1</Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link href="">Link 2</Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link href="">Link 3</Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>Link 4</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <div className={"content_container_barerr"}>
                                <div
                                    className={"content_container_barerr_first"}
                                >
                                    <div
                                        className={
                                            "content_container_barerr_first_card"
                                        }
                                    >
                                        <div
                                            className={
                                                "container_user_info_cover_info"
                                            }
                                        >
                                            <div
                                                className={
                                                    "container_user_info_cover_info_avatar"
                                                }
                                            >
                                                <img
                                                    className={
                                                        "container_user_info_cover_info_avatar_img_barerr"
                                                    }
                                                    src={"./images/avatar1.png"}
                                                    alt={"simple avatar"}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    "container_user_info_cover_info_name"
                                                }
                                            >
                                                <span
                                                    className={
                                                        "container_user_info_cover_info_name_name_barerr"
                                                    }
                                                >
                                                    Carlota Carnoele
                                                </span>
                                                <span
                                                    className={
                                                        "container_user_info_cover_info_name_role_barerr"
                                                    }
                                                >
                                                    Lastname
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        "content_container_barerr_second"
                                    }
                                >
                                    <div
                                        className={
                                            "content_container_barerr_second_free"
                                        }
                                    ></div>
                                    <div
                                        className={
                                            "content_container_barerr_second_buttons"
                                        }
                                    >
                                        <Button
                                            className={
                                                "content_container_barerr_second_buttons_button"
                                            }
                                            icon={<SearchOutlined />}
                                        >
                                            Search
                                        </Button>
                                        <Button
                                            className={
                                                "content_container_barerr_second_buttons_button"
                                            }
                                            icon={<SearchOutlined />}
                                        >
                                            Search
                                        </Button>
                                        <Button
                                            className={
                                                "content_container_barerr_second_buttons_button"
                                            }
                                            icon={<SearchOutlined />}
                                        >
                                            Search
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={"content_container_main_title"}>
                                <h2
                                    className={
                                        "content_container_main_title_h2"
                                    }
                                >
                                    Followers
                                </h2>
                                <div className={"content_container_main_items"}>
                                    <Follower />
                                    <Follower />
                                    <Follower />
                                    <Follower />
                                    <Follower />
                                    <Follower />
                                    <Follower />
                                    <Follower />
                                    <Follower />
                                </div>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>©2021</Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default App;
