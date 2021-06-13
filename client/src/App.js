// import LayoutRoutes from "./layout";
// import Navbar from "./Components/Navbar";
import { Layout, Menu } from "antd";
import "./App.css";
import SubMenuMaker from "./Components/SubMenuMaker/subMenuMaker";

// import { UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function App() {
    return (
        <>
            <Layout className={"container_layout"}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    width={"280px"}
                >
                    <div className="logo container_logo">
                        <img
                            src={"./images/brand.png"}
                            alt={"brand of the app"}
                            width={"40px"}
                        />
                    </div>
                    <div className={"container_user_info_cover"}>
                        <div className={"container_user_info_cover_info"}>
                            <div
                                className={
                                    "container_user_info_cover_info_avatar"
                                }
                            >
                                <img
                                    className={
                                        "container_user_info_cover_info_avatar_img"
                                    }
                                    src={"./images/avatar.png"}
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
                                        "container_user_info_cover_info_name_name"
                                    }
                                >
                                    Carlota Carnoele
                                </span>
                                <span
                                    className={
                                        "container_user_info_cover_info_name_role"
                                    }
                                >
                                    Lastname
                                </span>
                            </div>
                        </div>
                    </div>
                    <Menu mode="inline" defaultSelectedKeys={["4"]}>
                        <SubMenuMaker
                            key1={"7to8fycomdsifuytscadfkuasihjvsdjbfcnfskdf"}
                            key2={"sdfcijo,sjdmifygdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcsnhimojimudsfcdsimoj,csdcsdgfycsdij"}
                            key4={"sdfcsgndijcufngcsnhisdmocf,dsfcisdhui"}
                            key5={"sdfcysugdikp.sdckofijsgynsdijof,ck.sd[f"}
                        />
                        <SubMenuMaker
                            key1={"7to8fsdfduisifuytscadfkuasihjvsdjbfcnfskdf"}
                            key2={"sdfcidmifysdfdsgdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcskimufsdfsddsfcdsimoj,csdcsdgfycsdij"}
                            key4={"sdfcsgndsnhisdmocfsdsdgsdsdfg,dsfcisdhui"}
                            key5={"sdfcysugdckofijsgynsdijof,ck.ssdfsdfd[f"}
                        />
                        <SubMenuMaker
                            key1={"7tosdifuytscadfkuasihjvsdjbfcnfskdf"}
                            key2={"sdfcsjdmifygdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcsnhimkimudsfcdsimoj,csdcsdgfycsdij"}
                            key4={"sdfcsgndijchisdsdfsdmocf,dsfcisdhui"}
                            key5={"sdfcysdckoffsdijsgynsdijof,ck.sd[f"}
                        />
                        <SubMenuMaker
                            key1={"7to8fycomdskuasihsdfsdfjvsdjbfcnfskdf"}
                            key2={"sdfcijjdmifygdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcsnhimojs,j,csfsdfdsfdcsdgfycsdij"}
                            key4={"sdfcsgndijcufngcs,dsfcisdhsdfdsfsfsdui"}
                            key5={"sdfcysugdiofijsgynsdijof,ck.sd[dsfdsfdssf"}
                        />
                    </Menu>
                    <Menu mode="inline" defaultSelectedKeys={["4"]}>
                        <SubMenuMaker
                            key1={"7to8fycomdsifuytscadfkuasihjvsdjbfcnfskdf"}
                            key2={"sdfcijo,sjdmifygdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcsnhimojimudsfcdsimoj,csdcsdgfycsdij"}
                            key4={"sdfcsgndijcufngcsnhisdmocf,dsfcisdhui"}
                            key5={"sdfcysugdikp.sdckofijsgynsdijof,ck.sd[f"}
                        />
                        <SubMenuMaker
                            key1={"7to8fsdfduisifuytscadfkuasihjvsdjbfcnfskdf"}
                            key2={"sdfcidmifysdfdsgdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcskimufsdfsddsfcdsimoj,csdcsdgfycsdij"}
                            key4={"sdfcsgndsnhisdmocfsdsdgsdsdfg,dsfcisdhui"}
                            key5={"sdfcysugdckofijsgynsdijof,ck.ssdfsdfd[f"}
                        />
                        <SubMenuMaker
                            key1={"7tosdifuytscadfkuasihjvsdjbfcnfskdf"}
                            key2={"sdfcsjdmifygdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcsnhimkimudsfcdsimoj,csdcsdgfycsdij"}
                            key4={"sdfcsgndijchisdsdfsdmocf,dsfcisdhui"}
                            key5={"sdfcysdckoffsdijsgynsdijof,ck.sd[f"}
                        />
                        <SubMenuMaker
                            key1={"7to8fycomdskuasihsdfsdfjvsdjbfcnfskdf"}
                            key2={"sdfcijjdmifygdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcsnhimojs,j,csfsdfdsfdcsdgfycsdij"}
                            key4={"sdfcsgndijcufngcs,dsfcisdhsdfdsfsfsdui"}
                            key5={"sdfcysugdiofijsgynsdijof,ck.sd[dsfdsfdssf"}
                        />
                    </Menu>
                    <Menu mode="inline" defaultSelectedKeys={["4"]}>
                        <SubMenuMaker
                            key1={"7to8fycomdsifuytscadfkuasihjvsdjbfcnfskdf"}
                            key2={"sdfcijo,sjdmifygdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcsnhimojimudsfcdsimoj,csdcsdgfycsdij"}
                            key4={"sdfcsgndijcufngcsnhisdmocf,dsfcisdhui"}
                            key5={"sdfcysugdikp.sdckofijsgynsdijof,ck.sd[f"}
                        />
                        <SubMenuMaker
                            key1={"7to8fsdfduisifuytscadfkuasihjvsdjbfcnfskdf"}
                            key2={"sdfcidmifysdfdsgdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcskimufsdfsddsfcdsimoj,csdcsdgfycsdij"}
                            key4={"sdfcsgndsnhisdmocfsdsdgsdsdfg,dsfcisdhui"}
                            key5={"sdfcysugdckofijsgynsdijof,ck.ssdfsdfd[f"}
                        />
                        <SubMenuMaker
                            key1={"7tosdifuytscadfkuasihjvsdjbfcnfskdf"}
                            key2={"sdfcsjdmifygdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcsnhimkimudsfcdsimoj,csdcsdgfycsdij"}
                            key4={"sdfcsgndijchisdsdfsdmocf,dsfcisdhui"}
                            key5={"sdfcysdckoffsdijsgynsdijof,ck.sd[f"}
                        />
                        <SubMenuMaker
                            key1={"7to8fycomdskuasihsdfsdfjvsdjbfcnfskdf"}
                            key2={"sdfcijjdmifygdskcfiosdkfjshfh8sd8ofjsh78"}
                            key3={"fsdfgcsnhimojs,j,csfsdfdsfdcsdgfycsdij"}
                            key4={"sdfcsgndijcufngcs,dsfcisdhsdfdsfsfsdui"}
                            key5={"sdfcysugdiofijsgynsdijof,ck.sd[dsfdsfdssf"}
                        />
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        className="site-layout-sub-header-background header_background"
                        style={{ padding: 0 }}
                    />
                    <Content style={{ margin: "24px 16px 0" }}>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                                color: "white",
                            }}
                        >
                            content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default App;
