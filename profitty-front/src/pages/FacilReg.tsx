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

const FacilReg = () => {
    return (
        <Background>
            <FormBox>
                <ExtraBoldText sx={{ fontSize: "28px", mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText>
                <LightText sx={{ fontSize: "32px", mb: 2 }}>장소 등록 신청 하기</LightText>
                <FormInput placeholder="주소" name="address" />
                <FormInput placeholder="시설명" name="name" />
                <FormInput placeholder="가능 종목" name="sports" />
                <FormInput placeholder="시설 전화번호" name="phone" />
                <FormInput placeholder="시설 사진" name="pic" />
                <FormInput placeholder="증빙 서류" name="file" />
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    mt={20}
                >
                    <CommonBtn sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                </Stack>
            </FormBox>
        </Background>
    );
};

export default FacilReg;