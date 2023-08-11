import Background from "../../components/Layouts/Background";
import MainBox from "../../components/Layouts/MainBox";
import RowBox from "../../components/Layouts/RowBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import CommonBtn from "../../components/Inputs/CommonBtn";
import LinkTag from "../../components/Inputs/LinkTag";
import { Stack } from "@mui/material";

const MainTwo = () => {
    return (
        <Background>
            <MainBox>
                <LightText sx={{ mt: 5 }}>운동을</LightText>
                <Stack direction="row" mb={5}>
                    <ExtraBoldText sx={{ borderBottom: "5px solid #F4EB0F" }}>원하는 곳</ExtraBoldText>
                    <LightText>에서</LightText>
                </Stack>
                <LightText className="text">-------------------------------</LightText>
                <LightText className="text">-------------------------------</LightText>
                <LightText className="text">-------------------------------</LightText>
                <LightText className="text">-------------------------------</LightText>
                <LightText className="text">-------------------------------</LightText>
                <RowBox mt={20} sx={{ justifyContent: "flex-end" }}>
                    <LinkTag to="/signup" state={{ type: "coach" }}>
                        <CommonBtn className="coachBtn"><LightText className="coach">코치님 환영</LightText></CommonBtn>
                    </LinkTag>
                </RowBox>
            </MainBox>
        </Background>
    );
};

export default MainTwo;