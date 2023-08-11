import Background from "../../components/Layouts/Background";
import MainBox from "../../components/Layouts/MainBox";
import RowBox from "../../components/Layouts/RowBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import CommonBtn from "../../components/Inputs/CommonBtn";
import LinkTag from "../../components/Inputs/LinkTag";
import { Stack } from "@mui/material";
import BackgroundImage from "../../assets/images/image.png";

const MainOne = () => {
    return (
        <Background sx={{ background: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: "center center" }}>
            <MainBox>
                <RowBox mb={12}>
                    <LinkTag to="/"><ExtraBoldText className="logo" sx={{ letterSpacing: -1.2 }}>Profitty</ExtraBoldText></LinkTag>
                    <LinkTag to="/signin"><LightText className="font16">Log in</LightText></LinkTag>
                </RowBox>
                <LightText>복잡한 과정을</LightText>
                <Stack direction="row">
                    <ExtraBoldText>단 한번</ExtraBoldText>
                    <LightText>의 등록으로</LightText>
                </Stack>
                <ExtraBoldText>쉽게</ExtraBoldText>
                <RowBox mt={23} sx={{ justifyContent: "flex-end" }}>
                    <LinkTag to="/signup">
                        <CommonBtn className="signupBtn" sx={{ backgroundColor: "#023E5D", border: "none" }}><LightText className="font28">등록하기</LightText></CommonBtn>
                    </LinkTag>
                </RowBox>
            </MainBox>
        </Background>
    );
};

export default MainOne;