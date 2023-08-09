import { useState } from "react";
import Background from "../components/Layouts/Background";
import FormInput from "../components/Inputs/FormInput";
import FormBox from "../components/Layouts/FormBox";
import ExtraBoldText from "../components/Texts/ExtraBoldText";
import LightText from "../components/Texts/LightText";
import { MenuItem } from "@mui/material";
import CommonBtn from "../components/Inputs/CommonBtn";
import RowBox from "../components/Layouts/RowBox";
import SelectBox from "../components/Inputs/SelectBox";

const Search = () => {
    const [si, setSi] = useState("");
    const [gu, setGu] = useState("");
    const [dong, setDong] = useState("");

    return (
        <Background>
            <FormBox>
                <ExtraBoldText sx={{ fontSize: "28px", mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText>
                <LightText sx={{ fontSize: "32px", mb: 2 }}>시설 검색</LightText>
                <FormInput placeholder="종목" name="sports" />
                <SelectBox
                    value={si}
                    //onChange={handleChangeType}
                    displayEmpty
                >
                    <MenuItem value=""><LightText sx={{ color: "#7F7F7F" }}>대전광역시</LightText></MenuItem>
                </SelectBox>
                <SelectBox
                    value={gu}
                    //onChange={handleChangeType}
                    displayEmpty
                >
                    <MenuItem value=""><LightText sx={{ color: "#7F7F7F" }}>구</LightText></MenuItem>
                    <MenuItem value="1"><LightText sx={{ color: "#000000" }}>동구</LightText></MenuItem>
                    <MenuItem value="2"><LightText sx={{ color: "#000000" }}>중구</LightText></MenuItem>
                    <MenuItem value="2"><LightText sx={{ color: "#000000" }}>서구</LightText></MenuItem>
                    <MenuItem value="2"><LightText sx={{ color: "#000000" }}>유성구</LightText></MenuItem>
                    <MenuItem value="2"><LightText sx={{ color: "#000000" }}>대덕구</LightText></MenuItem>
                </SelectBox>
                <SelectBox
                    value={dong}
                    //onChange={handleChangeType}
                    displayEmpty
                >
                    <MenuItem value=""><LightText sx={{ color: "#7F7F7F" }}>동</LightText></MenuItem>
                    <MenuItem value="1"><LightText sx={{ color: "#000000" }}>중앙동</LightText></MenuItem>
                    <MenuItem value="2"><LightText sx={{ color: "#000000" }}>신인동</LightText></MenuItem>
                </SelectBox>
                <RowBox sx={{ justifyContent: "flex-end" }}>
                    <CommonBtn sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                </RowBox>
            </FormBox>
        </Background>
    );
};

export default Search;