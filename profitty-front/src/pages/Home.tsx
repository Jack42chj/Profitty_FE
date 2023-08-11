import Background from "../components/Layouts/Background";
import MainBox from "../components/Layouts/MainBox";
import ExtraBoldText from "../components/Texts/ExtraBoldText";
import LightText from "../components/Texts/LightText";
import CommonBtn from "../components/Inputs/CommonBtn";
import RowBox from "../components/Layouts/RowBox";

const Home = () => {
    return (
        <Background>
            <MainBox>
                <RowBox>
                    <ExtraBoldText className="logo" sx={{ mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText>
                    <RowBox spacing={4}>
                        <LightText className="font16" sx={{ mb: 2 }}>Profile</LightText>
                        <LightText className="font16" sx={{ mb: 2 }}>Log out</LightText>
                    </RowBox>
                </RowBox>
                <LightText className="font32" sx={{ mb: 2 }}>HOME</LightText>
                <CommonBtn sx={{ fontSize: "16px" }}>시설 검색</CommonBtn>
            </MainBox>
        </Background>
    )
}

export default Home;