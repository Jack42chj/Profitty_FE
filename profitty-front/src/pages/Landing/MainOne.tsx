import Background from "../../components/Layouts/Background";
import FormBox from "../../components/Layouts/FormBox";
import RowBox from "../../components/Layouts/RowBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import CommonBtn from "../../components/Inputs/CommonBtn";
import { Stack } from "@mui/material";
import BackgroundImage from "../../assets/images/image.png";
import { Link } from "react-router-dom";

const MainOne = () => {
    return (
        <Background sx={{ background: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: "center center" }}>
            <FormBox>
                <RowBox mb={12}>
                    <Link to="/"><ExtraBoldText sx={{ fontSize: "28px", letterSpacing: -1.2 }}>Profitty</ExtraBoldText></Link>
                    <Link to="/signin"><LightText sx={{ fontSize: "16px" }}>Log in</LightText></Link>
                </RowBox>
                <LightText>복잡한 과정을</LightText>
                <Stack direction="row">
                    <ExtraBoldText>단 한번</ExtraBoldText>
                    <LightText>의 등록으로</LightText>
                </Stack>
                <ExtraBoldText>쉽게</ExtraBoldText>
                <RowBox mt={23} sx={{ justifyContent: "flex-end" }}>
                    <Link to="/signup">
                        <CommonBtn sx={{ width: 185, height: 55, backgroundColor: "#023E5D", border: "none" }}><LightText sx={{ fontSize: "28px" }}>등록하기</LightText></CommonBtn>
                    </Link>
                </RowBox>
            </FormBox>
        </Background>
    );
};

export default MainOne;