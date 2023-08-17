import { useState } from "react";
import Background from "../../components/Layouts/Background";
import FormInput from "../../components/Inputs/FormInput";
import FormInputError from "../../components/Inputs/FormInputError";
import FormBox from "../../components/Layouts/FormBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import CommonBtn from "../../components/Inputs/CommonBtn";
import LinkTag from "../../components/Inputs/LinkTag";
import { checkTrim } from "../../utils/Trim";
import { signin } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const Signin = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleClickFind = () => {
        alert("ID 비밀번호 찾기!");
    };

    const handleLogin = async (postData: object) => {
        try{
            const response = await signin(postData);
            if(response.status === 200) {
                navigate('/home');
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
            password: data.get("password") as string,
        };
        const { id, password } = joinData;

        if (checkTrim(id)) setId("");
        else setId("ID를 입력해주세요.");

        if (checkTrim(password)) setPassword("");
        else setPassword("비밀번호를 입력해주세요.");

        if (checkTrim(id) && checkTrim(password)) {
            handleLogin(joinData);
        }
    };

    return (
        <Background>
            <FormBox>
                <LinkTag to="/home"><ExtraBoldText className="logo" sx={{ mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText></LinkTag>
                <LightText className="font32" sx={{ mb: 2 }}>Log in</LightText>
                <form onSubmit={handleSubmit}>
                    <FormInput placeholder="ID" name="id" />
                    <FormInputError>{id}</FormInputError>
                    <FormInput placeholder="PW" type="password" name="password" />
                    <FormInputError>{password}</FormInputError>
                    <CommonBtn type="submit" sx={{ borderRadius: "4px", width: 310, mb: 2 }}><LightText className="font16">Log in</LightText></CommonBtn>
                    <LightText className="font16" onClick={handleClickFind}>ID 찾기 / 비밀번호 찾기</LightText>
                </form>
            </FormBox>
        </Background>
    );
};

export default Signin;