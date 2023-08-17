import Background from "../components/Layouts/Background";
import MainBox from "../components/Layouts/MainBox";
import ExtraBoldText from "../components/Texts/ExtraBoldText";
import LightText from "../components/Texts/LightText";
import CommonBtn from "../components/Inputs/CommonBtn";
import RowBox from "../components/Layouts/RowBox";
import LinkTag from "../components/Inputs/LinkTag";
import { useState } from "react";

const Home = () => {
    const [isLogIn, setIsLogIn] = useState(false);

    return (
        <Background>
            <MainBox>
                <RowBox>
                    <LinkTag to="/home">
                        <ExtraBoldText className="logo" sx={{ mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText>
                    </LinkTag>
                    { isLogIn ? (
                        <RowBox spacing={4}>
                            <LightText className="font16" sx={{ mb: 2 }}>Profile</LightText>
                            <LightText className="font16" sx={{ mb: 2 }}>Log out</LightText>
                        </RowBox>
                    ) : (
                        <RowBox spacing={4}>
                            <LinkTag to="/signup">
                                <LightText className="font16" sx={{ mb: 2 }}>Sign up</LightText>
                            </LinkTag>
                            <LinkTag to="/signin">
                                <LightText className="font16" sx={{ mb: 2 }}>Log in</LightText>
                            </LinkTag>
                        </RowBox>
                    )}
                </RowBox>
                <LightText className="font32" sx={{ mb: 2 }}>HOME</LightText>
                <LinkTag to="/Search">
                    <CommonBtn sx={{ fontSize: "16px" }}>시설 검색</CommonBtn>
                </LinkTag>
            </MainBox>
        </Background>
    )
}

export default Home;