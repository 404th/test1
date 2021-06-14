import SubMenuMaker from "../SubMenuMaker/subMenuMaker";
import { Layout, Menu } from "antd";
const { Sider } = Layout;   

function HomeSide() {
    return (
        <Sider
            className={"container_homeside"}
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
                    <div className={"container_user_info_cover_info_avatar"}>
                        <img
                            className={
                                "container_user_info_cover_info_avatar_img"
                            }
                            src={"./images/avatar.png"}
                            alt={"simple avatar"}
                        />
                    </div>
                    <div className={"container_user_info_cover_info_name"}>
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
            <div className={"container_menu_title"}>
                <h4 className={"container_menu_title_h4"}>General</h4>
            </div>
            <Menu mode="inline" defaultSelectedKeys={["123"]}>
                <SubMenuMaker
                    key1={"7to8fycosicadkuasiefsaefhjvsdjbfcnfskdf"}
                    key2={"sdfcijygdskciosdkfjshfhdsfdsf8sd8ofjsh78"}
                    key3={"fsdfgcsnhimoudfcdsimoj,csdcsdgfycsddsfdsij"}
                    key4={"sdfcsgndijfngcshisdmocf,dsfcisdhusdfdi"}
                    key5={"sdfugdikp.sdckofsgynsdijof,ck.sdfdsd[f"}
                />
            </Menu>
            <Menu mode="inline" defaultSelectedKeys={["124"]}>
                <SubMenuMaker
                    key1={"7to8fycosicadfkuasiefsfhjvsdjbfcnfskdf"}
                    key2={"sdfcijygdskcfiosdkfjsfhdsfdsf8sd8ofjsh78"}
                    key3={"fsdfgcsnhimoudsfcdsioj,csdcsdgfycsddsfdsij"}
                    key4={"sdfcsgndijfngcsnhismocf,dsfcisdhusdfdi"}
                    key5={"sdfugdikp.sdckofijgynsdijof,ck.sdfdsd[f"}
                />
            </Menu>
            <Menu mode="inline" defaultSelectedKeys={["125"]}>
                <SubMenuMaker
                    key1={"7tfycosicadfkuasiefsaefhjvsdjbfcnfskdf"}
                    key2={"sdjygdskcfiosdkfjshfhdsfdsf8sd8ofjsh78"}
                    key3={"fsdnhimoudsfcdsimoj,csdcsdgfycsddsfdsij"}
                    key4={"sdndijfngcsnhisdmocf,dsfcisdhusdfdi"}
                    key5={"sdikp.sdckofijsgynsdijof,ck.sdfdsd[f"}
                />
            </Menu>
            <div className={"container_menu_title"}>
                <h4 className={"container_menu_title_h4"}>General</h4>
            </div>
            <Menu mode="inline" defaultSelectedKeys={["126"]}>
                <SubMenuMaker
                    key1={"7to8fycosicadkuasiefsaefhjvsdjbfcnfskdf"}
                    key2={"sdfcijygdskciosdkfjshfhdsfdsf8sd8ofjsh78"}
                    key3={"fsdfgcsnhimoudfcdsimoj,csdcsdgfycsddsfdsij"}
                    key4={"sdfcsgndijfngcshisdmocf,dsfcisdhusdfdi"}
                    key5={"sdfugdikp.sdckofsgynsdijof,ck.sdfdsd[f"}
                />
            </Menu>
            <Menu mode="inline" defaultSelectedKeys={["127"]}>
                <SubMenuMaker
                    key1={"7to8fycosicadfkuasiefsfhjvsdjbfcnfskdf"}
                    key2={"sdfcijygdskcfiosdkfjsfhdsfdsf8sd8ofjsh78"}
                    key3={"fsdfgcsnhimoudsfcdsioj,csdcsdgfycsddsfdsij"}
                    key4={"sdfcsgndijfngcsnhismocf,dsfcisdhusdfdi"}
                    key5={"sdfugdikp.sdckofijgynsdijof,ck.sdfdsd[f"}
                />
            </Menu>
            <Menu mode="inline" defaultSelectedKeys={["128"]}>
                <SubMenuMaker
                    key1={"7tfycosicadfkuasiefsaefhjvsdjbfcnfskdf"}
                    key2={"sdjygdskcfiosdkfjshfhdsfdsf8sd8ofjsh78"}
                    key3={"fsdnhimoudsfcdsimoj,csdcsdgfycsddsfdsij"}
                    key4={"sdndijfngcsnhisdmocf,dsfcisdhusdfdi"}
                    key5={"sdikp.sdckofijsgynsdijof,ck.sdfdsd[f"}
                />
            </Menu>
            <div className={"container_menu_title"}>
                <h4 className={"container_menu_title_h4"}>General</h4>
            </div>
            <Menu mode="inline" defaultSelectedKeys={["129"]}>
                <SubMenuMaker
                    key1={"7to8fycosickuasiefsaefhjvsdjbfcnfskdf"}
                    key2={"sdfcijygdciosdkfjshfhdsfdsf8sd8ofjsh78"}
                    key3={"fsdfgcsimoudfcdsimoj,csdcsdgfycsddsfdsij"}
                    key4={"sdfcsgnjfngcshisdmocf,dsfcisdhusdfdi"}
                    key5={"sdfugdp.sdckofsgynsdijof,ck.sdfdsd[f"}
                />
            </Menu>
            <Menu mode="inline" defaultSelectedKeys={["130"]}>
                <SubMenuMaker
                    key1={"7to8cosicadfkuasiefsfhjvsdjbfcnfskdf"}
                    key2={"sdijygdskcfiosdkfjsfhdsfdsf8sd8ofjsh78"}
                    key3={"dfgcsnhimoudsfcdsioj,csdcsdgfycsddsfdsij"}
                    key4={"sdfcsgndijfngcsnhismocf,isdhusdfdi"}
                    key5={"sdfugdikp.sdckofijgyjof,ck.sdfdsd[f"}
                />
            </Menu>
            <Menu mode="inline" defaultSelectedKeys={["131"]}>
                <SubMenuMaker
                    key1={"7tfycosicadfkuasaefhjvsdjbfcnfskdf"}
                    key2={"sdjygdskcfiosjshfhdsfdsf8sd8ofjsh78"}
                    key3={"fsdnhimouddsimoj,csdcsdgfycsddsfdsij"}
                    key4={"sdndijfsnhisdmocf,dsfcisdhusdfdi"}
                    key5={"sdikdckofijsgynsdijof,ck.sdfdsd[f"}
                />
            </Menu>
            <div className={"container_menu_title"}>
                <h4 className={"container_menu_title_h4"}>General</h4>
            </div>
            <Menu mode="inline" defaultSelectedKeys={["132"]}>
                <SubMenuMaker
                    key1={"7to8fycosickuasiefdfsaefhjvsdjbfcnfskdf"}
                    key2={"sdfcijygdciosdkfjshfdfhdsfdsf8sd8ofjsh78"}
                    key3={"fsdfgcsimoudfcdsimoj,csdsdcsdgfycsddsfdsij"}
                    key4={"sdfcsgnjfngcshisdmocf,ddssfcisdhusdfdi"}
                    key5={"sdfugdp.sdckofsgynsdijofds,ck.sdfdsd[f"}
                />
            </Menu>
            <Menu mode="inline" defaultSelectedKeys={["133"]}>
                <SubMenuMaker
                    key1={"7to8cosicadfkuasiefsfhjvsdjbfcnfdfskdf"}
                    key2={"sdijygdskcfiosdkfjsfhdsfdsf8sdfjsh78"}
                    key3={"dfgcsnhimoudsfcdsioj,csdcsdgcsddsfdsij"}
                    key4={"sdfcsgndijfngcsnhismocf,isusdfdi"}
                    key5={"sdfugdikp.sdckofijgyjof,ds.sdfdsd[f"}
                />
            </Menu>
            <Menu mode="inline" defaultSelectedKeys={["134"]}>
                <SubMenuMaker
                    key1={"7tfycosicadfkuasaefhjvsdjbfcnfssdkdf"}
                    key2={"sdjygdskcfiosjshfhdsfdsf8sd8ofjshsd78"}
                    key3={"fsdnhimouddsimoj,csdcsdgfycsddsfdsisdj"}
                    key4={"sdndijfsnhisdmocf,dsfcisdhusdfdsdsdi"}
                    key5={"sdikdckofijsgynsdijof,ck.sdfdsd[dfdfsf"}
                />
            </Menu>
        </Sider>
    );
}

export default HomeSide;
