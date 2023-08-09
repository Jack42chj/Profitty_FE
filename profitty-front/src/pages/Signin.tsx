import Background from "../components/Layouts/Background";
import FormInput from "../components/Inputs/FormInput";
import FormBox from "../components/Layouts/FormBox";
import ExtraBoldText from "../components/Texts/ExtraBoldText";
import LightText from "../components/Texts/LightText";
import CommonBtn from "../components/Inputs/CommonBtn";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <Background>
            <FormBox>
                <Link to="/"><ExtraBoldText sx={{ fontSize: "28px", mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText></Link>
                <LightText sx={{ fontSize: "32px", mb: 2 }}>Log in</LightText>
                <FormInput placeholder="ID" name="id" />
                <FormInput placeholder="PW" name="password" />
                <CommonBtn sx={{ borderRadius: "4px", width: 310, mb: 2 }}><LightText sx={{ fontSize: "16px" }}>Log in</LightText></CommonBtn>
                <LightText>ID 찾기 / 비밀번호 찾기</LightText>
            </FormBox>
        </Background>
    );
};

export default Signin;