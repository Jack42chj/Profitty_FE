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
import { Link } from "react-router-dom";

const Signup = () => {
    const [type, setType] = useState("");
    // const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setType(event.target.value);
    // };

    return (
        <Background>
            <FormBox>
                <Link to="/"><ExtraBoldText sx={{ fontSize: "28px", mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText></Link>
                <LightText sx={{ fontSize: "32px", mb: 2 }}>회원 가입</LightText>
                <FormInput placeholder="Email Address (ID)" name="id" />
                <FormInput placeholder="Name" name="password" />
                <FormInput placeholder="Mobile Number" name="mobile" />
                <SelectBox
                    value={type}
                    //onChange={handleChangeType}
                    displayEmpty
                >
                    <MenuItem value=""><LightText sx={{ color: "#7F7F7F" }}>회원 유형</LightText></MenuItem>
                    <MenuItem value="1"><LightText sx={{ color: "#000000" }}>체육지도자</LightText></MenuItem>
                    <MenuItem value="2"><LightText sx={{ color: "#000000" }}>시설관리자</LightText></MenuItem>
                </SelectBox>
                <FormInput placeholder="Password" name="password" />
                <FormInput placeholder="Confirm Password" name="check" sx={{ mb: 1 }}/>
                <FormControlLabel control={<CheckBox />} label={<LightText>Confirm Password</LightText>} />
                <FormControlLabel control={<CheckBox />} label={<LightText><a style={{ textDecoration: "underline"}}>전체 약관</a> 동의</LightText>} />
                <RowBox sx={{ justifyContent: "flex-end" }}>
                    <CommonBtn sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                </RowBox>
                
            </FormBox>
        </Background>
    );
};

export default Signup;