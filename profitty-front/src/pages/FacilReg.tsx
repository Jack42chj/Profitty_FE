import Background from "../components/Layouts/Background";
import FormInput from "../components/Inputs/FormInput";
import FormBox from "../components/Layouts/FormBox";
import RowBox from "../components/Layouts/RowBox";
import ExtraBoldText from "../components/Texts/ExtraBoldText";
import LightText from "../components/Texts/LightText";
import CommonBtn from "../components/Inputs/CommonBtn";
import LinkTag from "../components/Inputs/LinkTag";

const FacilReg = () => {
    return (
        <Background>
            <FormBox>
                <LinkTag to="/"><ExtraBoldText className="logo" sx={{ mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText></LinkTag>
                <LightText sx={{ fontSize: "32px", mb: 2 }}>장소 등록 신청 하기</LightText>
                <FormInput placeholder="주소" name="address" />
                <FormInput placeholder="시설명" name="name" />
                <FormInput placeholder="가능 종목" name="sports" />
                <FormInput placeholder="시설 전화번호" name="phone" />
                <FormInput placeholder="시설 사진" name="pic" />
                <FormInput placeholder="증빙 서류" name="file" />
                <RowBox mt={20} sx={{ justifyContent: "flex-end" }}>
                    <CommonBtn sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                </RowBox>
            </FormBox>
        </Background>
    );
};

export default FacilReg;