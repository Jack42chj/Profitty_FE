import Background from "../components/Layouts/Background";
import FormBox from "../components/Layouts/FormBox";
import ExtraBoldText from "../components/Texts/ExtraBoldText";
import LightText from "../components/Texts/LightText";
import CommonBtn from "../components/Inputs/CommonBtn";
import RowBox from "../components/Layouts/RowBox";

const Home = () => {
    return (
        <Background>
            <FormBox>
                <RowBox>
                    <ExtraBoldText sx={{ fontSize: "28px", mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText>
                    <RowBox spacing={4}>
                        <LightText sx={{ fontSize: "16px", mb: 2 }}>Profile</LightText>
                        <LightText sx={{ fontSize: "16px", mb: 2 }}>Log out</LightText>
                    </RowBox>
                </RowBox>
                <LightText sx={{ fontSize: "32px", mb: 2 }}>HOME</LightText>
                <CommonBtn sx={{ fontSize: "16px" }}>시설 검색</CommonBtn>
            </FormBox>
        </Background>
    )
}

export default Home;