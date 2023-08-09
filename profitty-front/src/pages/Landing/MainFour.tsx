import Background from "../../components/Layouts/Background";
import FormBox from "../../components/Layouts/FormBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";

const MainFour = () => {
    return (
        <Background>
            <FormBox>
                <LightText sx={{ fontSize: "35px", mt: 5 }}>일반 멘트 크기</LightText>
                <ExtraBoldText sx={{ fontSize: "35px", mt: 5 }}>강조 멘트 크기</ExtraBoldText>
                <LightText sx={{ fontSize: "35px", mt: 5 }}>건강부터 즐거움까지</LightText>
            </FormBox>
        </Background>
    );
};

export default MainFour;