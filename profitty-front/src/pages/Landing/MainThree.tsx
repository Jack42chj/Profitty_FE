import Background from "../../components/Layouts/Background";
import FormBox from "../../components/Layouts/FormBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const MainThree = () => {
    return (
        <Background>
            <FormBox>
                <Stack direction="row" mt={5} mb={-1}>
                    <ExtraBoldText sx={{ fontSize: "35px" }}>대관 제휴</ExtraBoldText>
                    <LightText sx={{ fontSize: "35px" }}>하실</LightText>
                </Stack>
                <LightText sx={{ fontSize: "35px", mb: 5 }}>시설을 모집합니다.</LightText>
                <Link to="/signup">
                    <ExtraBoldText sx={{ fontSize: "28px", textDecoration: "underline" }}>장소 등록 하기</ExtraBoldText>
                </Link>
            </FormBox>
        </Background>
    );
};

export default MainThree;