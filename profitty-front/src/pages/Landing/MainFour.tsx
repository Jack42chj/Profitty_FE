import Background from "../../components/Layouts/Background";
import MainBox from "../../components/Layouts/MainBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";

const MainFour = () => {
    return (
        <Background>
            <MainBox>
                <LightText sx={{ mt: 5 }}>일반 멘트 크기</LightText>
                <ExtraBoldText sx={{ mt: 5 }}>강조 멘트 크기</ExtraBoldText>
                <LightText sx={{ mt: 5 }}>건강부터 즐거움까지</LightText>
            </MainBox>
        </Background>
    );
};

export default MainFour;