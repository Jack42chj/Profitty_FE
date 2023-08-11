import { useState } from "react";
import Background from "../components/Layouts/Background";
import FormInput from "../components/Inputs/FormInput";
import FormBox from "../components/Layouts/FormBox";
import RowBox from "../components/Layouts/RowBox";
import ExtraBoldText from "../components/Texts/ExtraBoldText";
import LightText from "../components/Texts/LightText";
import { FormControlLabel, MenuItem } from "@mui/material";
import CommonBtn from "../components/Inputs/CommonBtn";
import SelectBox from "../components/Inputs/SelectBox";
import CheckBox from "../components/Inputs/CheckBox";
import LinkTag from "../components/Inputs/LinkTag";
import { checkTrim } from "../utils/Trim";
import FormInputError from "../components/Inputs/FormInputError";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const defaultType = useLocation().state?.type || "";

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [type, setType] = useState(defaultType || "");
    const [typeError, setTypeError] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("");

    const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const joinData = {
            id: data.get("id") as string,
            name: data.get("name") as string,
            mobile: data.get("mobile") as string,
            type: data.get("type") as string,
            password: data.get("password") as string,
            check: data.get("check") as string,
        };
        const { id, name, mobile, type, password } = joinData;

        if (checkTrim({ text: id })) setId("");
        else setId("ID를 입력해주세요.");
        
        if (checkTrim({ text: name })) setName("");
        else setName("이름을 입력해주세요.");

        if (checkTrim({ text: mobile })) setMobile("");
        else setMobile("휴대폰 번호를 입력해주세요.");

        if (checkTrim({ text: type })) setTypeError("");
        else setTypeError("회원 유형을 선택해주세요.");

        if (checkTrim({ text: password })) setPassword("");
        else setPassword("비밀번호를 입력해주세요.");

        if(!checkTrim({ text: check })) setCheck("비밀번호를 다시 한번 입력해주세요.")
        else{
            if(check !== password) setCheck("");
            else setCheck("비밀번호가 일치하지 않습니다.");
        }

        if (checkTrim({ text: id }) && checkTrim({ text: name }) && checkTrim({ text: mobile }) && checkTrim({ text: type }) && checkTrim({ text: password }) && checkTrim({ text: check })) {
            console.log(joinData);
            //hanleLogin(joinData);
        }
    };

    return (
        <Background>
            <FormBox>
                <LinkTag to="/"><ExtraBoldText className="logo" sx={{ mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText></LinkTag>
                <LightText className="font32" sx={{ mb: 2 }}>회원 가입</LightText>
                <form onSubmit={handleSubmit}>
                    <FormInput placeholder="Email Address (ID)" name="id" />
                    <FormInputError>{id}</FormInputError>
                    <FormInput placeholder="Name" name="name" />
                    <FormInputError>{name}</FormInputError>
                    <FormInput placeholder="Mobile Number" name="mobile" />
                    <FormInputError>{mobile}</FormInputError>
                    <SelectBox
                        value={type}
                        onChange={handleChangeType}
                        displayEmpty
                        name="type"
                    >
                        <MenuItem value=""><LightText className="font16" sx={{ color: "#7F7F7F" }}>회원 유형</LightText></MenuItem>
                        <MenuItem value="coach"><LightText className="font16" sx={{ color: "#000000" }}>체육지도자</LightText></MenuItem>
                        <MenuItem value="facility"><LightText className="font16" sx={{ color: "#000000" }}>시설관리자</LightText></MenuItem>
                    </SelectBox>
                    <FormInputError>{typeError}</FormInputError>
                    <FormInput placeholder="Password" type="password" name="password" />
                    <FormInputError>{password}</FormInputError>
                    <FormInput placeholder="Confirm Password" type="password" name="check" />
                    <FormInputError>{check}</FormInputError>
                    <FormControlLabel control={<CheckBox />} label={<LightText className="font16">Confirm Password</LightText>} />
                    <FormControlLabel control={<CheckBox />} label={<LightText className="font16"><a style={{ textDecoration: "underline"}}>전체 약관</a> 동의</LightText>} />
                    <RowBox sx={{ justifyContent: "flex-end" }}>
                        <CommonBtn type="submit" sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                    </RowBox>
                </form>
            </FormBox>
        </Background>
    );
};

export default Signup;