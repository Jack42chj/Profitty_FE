import Background from "../../components/Layouts/Background";
import MainBox from "../../components/Layouts/MainBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import LinkTag from "../../components/Inputs/LinkTag";
import { Stack } from "@mui/material";

const MainThree = () => {
    return (
        <Background>
            <MainBox>
                <Stack direction="row" mt={5} mb={-1}>
                    <ExtraBoldText>대관 제휴</ExtraBoldText>
                    <LightText>하실</LightText>
                </Stack>
                <LightText sx={{ mb: 5 }}>시설을 모집합니다.</LightText>
                <LinkTag to="/signup" state={{ type: "facility" }}>
                    <ExtraBoldText className="facil" sx={{ textDecoration: "underline" }}>장소 등록 하기</ExtraBoldText>
                </LinkTag>
            </MainBox>
        </Background>
    );
};

export default MainThree;