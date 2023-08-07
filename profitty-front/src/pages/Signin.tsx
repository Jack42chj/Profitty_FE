import Background from "../components/Background";
import FormInput from "../components/FormInput";
import FormBox from "../components/FormBox";
import ExtraBoldText from "../components/ExtraBoldText";
import LightText from "../components/LightText";

const Signin = () => {
    return (
        <Background>
            <ExtraBoldText sx={{ fontSize: "48px" }}>Profitty</ExtraBoldText>
            <LightText sx={{ fontSize: "48px" }}>Profitty</LightText>
            <FormBox>
                <FormInput placeholder="ID" name="id" />
                <FormInput placeholder="PW" name="password" />
            </FormBox>
        </Background>
    )
}

export default Signin;