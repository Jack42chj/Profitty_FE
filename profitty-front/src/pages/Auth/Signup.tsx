import { useState } from "react";
import Background from "../../components/Layouts/Background";
import FormInput from "../../components/Inputs/FormInput";
import FormBox from "../../components/Layouts/FormBox";
import RowBox from "../../components/Layouts/RowBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import { FormControlLabel, MenuItem } from "@mui/material";
import CommonBtn from "../../components/Inputs/CommonBtn";
import SelectBox from "../../components/Inputs/SelectBox";
import CheckBox from "../../components/Inputs/CheckBox";
import LinkTag from "../../components/Inputs/LinkTag";
import { checkTrim } from "../../utils/Trim";
import FormInputError from "../../components/Inputs/FormInputError";
import { useLocation, useNavigate } from "react-router-dom";
import { checkEmail, checkName, checkPhone } from "../../utils/Regex";
import { signup } from "../../services/userServices";
import { AxiosError } from "axios";

const Signup = () => {
    const navigate = useNavigate();
    const defaultType = useLocation().state?.type || "";

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [type, setType] = useState(defaultType || "");
    const [typeError, setTypeError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [check, setCheck] = useState("");
    const [checkError, setCheckError] = useState("");
    const [terms, setTerms] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setConfirm(newPassword === check);
    };
    
    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCheck = event.target.value;
        setCheck(newCheck);
        setConfirm(password === newCheck);
    };

    const handleChangeCheckBox = () => {
        setTerms((prevTerms) => !prevTerms);
    };

    const handleSignup = async (postData: object) => {
        try{
            const response = await signup(postData);
            if(response.status === 200) {
                navigate('/coach_register');
            }
            if(response.status === 201) {
                navigate('/facility_register');
            }
        } catch (err: unknown) {
            const Error = err as unknown as AxiosError;
            if (Error.response && (Error.response.status === 401)) {
                alert('비밀번호가 확인해주세요.');
            } 
            else if (Error.response && (Error.response.status === 404)) {
                alert('존재하지 않는 회원정보입니다.');
            }
        }
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

        if (!checkTrim(id)) setId("이메일(ID)를 입력해주세요.");
        else {
            if(!checkEmail(id)) setId("이메일 형식이 올바르지 않습니다.");
            else setId("");
        }
        
        if (!checkTrim(name)) setName("이름을 입력해주세요.");
        else {
            if(!checkName(name)) setName("이름이 올바르지 않습니다.");
            else setName("");
        }

        if (!checkTrim(mobile)) setMobile("휴대폰 번호를 입력해주세요.");
        else {
            if(!checkPhone(mobile)) setMobile("휴대폰 번호가 올바르지 않습니다.");
            else setMobile("");
        }

        if (checkTrim(type)) setTypeError("");
        else setTypeError("회원 유형을 선택해주세요.");

        if (checkTrim(password)) setPasswordError("");
        else setPasswordError("비밀번호를 입력해주세요.");

        if(!checkTrim(check)) setCheckError("비밀번호를 다시 한번 입력해주세요.")
        else{
            if(confirm === true) setCheckError("");
            else setCheckError("비밀번호가 일치하지 않습니다.");
        }

        if(terms === false) {
            alert("약관의 동의해주세요!");
        }

        if (checkTrim(id) && checkTrim(name) && checkTrim(mobile) && checkTrim(type) && checkTrim(password) && checkTrim(check) && terms === true && confirm === true) {
            handleSignup(joinData);
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
                    <FormInput placeholder="Password" type="password" name="password" onChange={handlePasswordChange} />
                    <FormInputError>{passwordError}</FormInputError>
                    <FormInput placeholder="Confirm Password" type="password" name="check" onChange={handleCheckChange}/>
                    <FormInputError>{checkError}</FormInputError>
                    <FormControlLabel control={<CheckBox checked={confirm} disabled={true} />} label={
                        <LightText className="font16">
                            Confirm Password
                        </LightText>
                    } />
                    <FormControlLabel control={<CheckBox checked={terms} onChange={handleChangeCheckBox} />} label={
                        <LightText className="font16">
                            <a target="_blank" href="/terms" style={{ textDecoration: "underline", color: "#FCFCFC"}}>
                                전체 약관
                            </a> 동의
                        </LightText>
                    } />
                    <RowBox sx={{ justifyContent: "flex-end" }}>
                        <CommonBtn type="submit" sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                    </RowBox>
                </form>
            </FormBox>
        </Background>
    );
};

export default Signup;