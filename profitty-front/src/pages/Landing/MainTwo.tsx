import Background from "../../components/Layouts/Background";
import FormBox from "../../components/Layouts/FormBox";
import RowBox from "../../components/Layouts/RowBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import CommonBtn from "../../components/Inputs/CommonBtn";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const MainTwo = () => {
    return (
        <Background>
            <FormBox>
                <LightText sx={{ fontSize: "35px", mt: 5 }}>운동을</LightText>
                <Stack direction="row" mb={5}>
                    <ExtraBoldText sx={{ fontSize: "35px", borderBottom: "5px solid #F4EB0F" }}>원하는 곳</ExtraBoldText>
                    <LightText sx={{ fontSize: "35px" }}>에서</LightText>
                </Stack>
                <LightText sx={{ fontSize: "20px" }}>-------------------------------</LightText>
                <LightText sx={{ fontSize: "20px" }}>-------------------------------</LightText>
                <LightText sx={{ fontSize: "20px" }}>-------------------------------</LightText>
                <LightText sx={{ fontSize: "20px" }}>-------------------------------</LightText>
                <LightText sx={{ fontSize: "20px" }}>-------------------------------</LightText>
                <RowBox mt={20} sx={{ justifyContent: "flex-end" }}>
                    <Link to="/signup">
                        <CommonBtn sx={{ width: 120 }}><LightText sx={{ fontSize: "20px" }}>코치님 환영</LightText></CommonBtn>
                    </Link>
                </RowBox>
            </FormBox>
        </Background>
    );
};

export default MainTwo;