import { useState } from "react";
import Background from "../components/Layouts/Background";
import FormInput from "../components/Inputs/FormInput";
import FormBox from "../components/Layouts/FormBox";
import RowBox from "../components/Layouts/RowBox";
import ExtraBoldText from "../components/Texts/ExtraBoldText";
import LightText from "../components/Texts/LightText";
import CommonBtn from "../components/Inputs/CommonBtn";
import LinkTag from "../components/Inputs/LinkTag";

const CoachReg = () => {
    // const [sports, setSports] = useState("");
    // const [region, setRegion] = useState("");
    // const [accountId, setAccountId] = useState("");
    // const [sportsId, setSportsId] = useState("");
    // const [sports, setSports] = useState("");

    return (
        <Background>
            <FormBox>
                <LinkTag to="/"><ExtraBoldText className="logo" sx={{ mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText></LinkTag>
                <LightText className="font32" sx={{ mb: 2 }}>체육지도자 등록 하기</LightText>
                <FormInput placeholder="희망 종목" name="sports" />
                <FormInput placeholder="희망 근무지역" name="region" />
                <FormInput placeholder="주민등록번호" name="account" />
                <FormInput placeholder="체육 지도자 등록번호" name="id" />
                <FormInput placeholder="증빙 서류" name="file" />
                <RowBox mt={28} sx={{ justifyContent: "flex-end" }}>
                    <CommonBtn sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                </RowBox>
            </FormBox>
        </Background>
    );
};

export default CoachReg;