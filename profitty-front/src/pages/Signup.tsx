import { useState } from "react";
import Background from "../components/Layouts/Background";
import FormInput from "../components/Inputs/FormInput";
import FormBox from "../components/Layouts/FormBox";
import ExtraBoldText from "../components/Texts/ExtraBoldText";
import LightText from "../components/Texts/LightText";
import { FormControlLabel, MenuItem, Stack } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import CommonBtn from "../components/Inputs/CommonBtn";
import SelectBox from "../components/Inputs/SelectBox";
import CheckBox from "../components/Inputs/CheckBox";

const Signup = () => {
    const [type, setType] = useState("");
    const handleChangeType = (e: SelectChangeEvent) => {
        setType(e.target.value as string);
    };

    return (
        <Background>
            <FormBox>
                <ExtraBoldText sx={{ fontSize: "28px", mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText>
                <LightText sx={{ fontSize: "32px", mb: 2 }}>회원 가입</LightText>
                <FormInput placeholder="Email Address (ID)" name="id" />
                <FormInput placeholder="Name" name="password" />
                <FormInput placeholder="Mobile Number" name="mobile" />
                <SelectBox
                    value={type}
                    //onChange={handleChangeType}
                    displayEmpty
                >
                    <MenuItem value="">회원 유형</MenuItem>
                    <MenuItem value={1}>체육지도자</MenuItem>
                    <MenuItem value={2}>시설관리자</MenuItem>
                </SelectBox>
                <FormInput placeholder="Password" name="password" />
                <FormInput placeholder="Confirm Password" name="check" sx={{ mb: 1 }}/>
                <FormControlLabel control={<CheckBox />} label={<LightText>Confirm Password</LightText>} />
                <FormControlLabel control={<CheckBox />} label={<LightText>전체 약관 동의</LightText>} />
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <CommonBtn sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                </Stack>
                
            </FormBox>
        </Background>
    );
};

export default Signup;