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
import LinkTag from "../components/Inputs/LinkTag";
import SearchInfo from "../components/SearchInfo";
import { AxiosError } from "axios";
import { facility_search } from "../services/userServices";

const facility_data = {
    1: {"name": "대전 월드컵 경기장", "address": "대전광역시 유성구 월드컵대로 32", "phone": "02-1234-5678", "sports": "축구", "manager": "홍길동"},
    2: {"name": "대전 충무 체육관", "address": "대전광역시 중구 대종로 373", "phone": "02-1234-5678", "sports": "농구, 헬스", "manager": "홍길동"},
    3: {"name": "대전 한마음 생활 체육관", "address": "대전광역시 중구 유등천동로 420", "phone": "02-1234-5678", "sports": "배드민턴, 농구", "manager": "홍길동"},
    4: {"name": "대전 관전 다목적 체육관", "address": "대전광역시 서구 관저중로 10", "phone": "02-1234-5678", "sports": "농구, 배구", "manager": "홍길동"},
    5: {"name": "대전 월드컵 경기장C", "address": "대전광역시 유성구 월드컵대로 32", "phone": "02-1234-5678", "sports": "축구", "manager": "홍길동"},
};

const Search = () => {
    const [si, setSi] = useState("");
    const [gu, setGu] = useState("");
    const [dong, setDong] = useState("");
    const [searchData, setSearchData] = useState({});

    const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "si"){
            setSi(event.target.value);
        } else if(event.target.name === "gu"){
            setGu(event.target.value);
        } else {
            setDong(event.target.value);
        }
    };

    const handleSearch = async (data: object) => {
        try {
            const response = await facility_search(data);
            if(response.status === 200) {
                setSearchData(response.data);
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
            sports: data.get("sports"),
            si: data.get("si"),
            gu: data.get("gu"),
            dong: data.get("dong"),
        };
        handleSearch(joinData);
    };

    return (
        <Background>
            <FormBox>
                <LinkTag to="/home">
                    <ExtraBoldText className="logo" sx={{ mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText>
                </LinkTag>
                <LightText className="font32" sx={{ mb: 2 }}>시설 검색</LightText>
                <form onSubmit={handleSubmit}>
                    <FormInput placeholder="종목" name="sports" sx={{ mb: 2 }} />
                    <SelectBox
                        value={si}
                        onChange={handleChangeType}
                        name="si"
                        displayEmpty
                        style={{ marginBottom: 16}}
                    >
                        <MenuItem value=""><LightText className="font16" sx={{ color: "#7F7F7F" }}>시</LightText></MenuItem>
                        <MenuItem value="daegeon"><LightText className="font16" sx={{ color: "#000000" }}>대전광역시</LightText></MenuItem>
                    </SelectBox>
                    <SelectBox
                        value={gu}
                        name="gu"
                        onChange={handleChangeType}
                        displayEmpty
                        style={{ marginBottom: 16}}
                    >
                        <MenuItem value=""><LightText className="font16" sx={{ color: "#7F7F7F" }}>구</LightText></MenuItem>
                        <MenuItem value="1"><LightText className="font16" sx={{ color: "#000000" }}>동구</LightText></MenuItem>
                        <MenuItem value="2"><LightText className="font16" sx={{ color: "#000000" }}>중구</LightText></MenuItem>
                        <MenuItem value="2"><LightText className="font16" sx={{ color: "#000000" }}>서구</LightText></MenuItem>
                        <MenuItem value="2"><LightText className="font16" sx={{ color: "#000000" }}>유성구</LightText></MenuItem>
                        <MenuItem value="2"><LightText className="font16" sx={{ color: "#000000" }}>대덕구</LightText></MenuItem>
                    </SelectBox>
                    <SelectBox
                        value={dong}
                        name="dong"
                        onChange={handleChangeType}
                        displayEmpty
                    >
                        <MenuItem value=""><LightText className="font16" sx={{ color: "#7F7F7F" }}>동</LightText></MenuItem>
                        <MenuItem value="1"><LightText className="font16" sx={{ color: "#000000" }}>중앙동</LightText></MenuItem>
                        <MenuItem value="2"><LightText className="font16" sx={{ color: "#000000" }}>신인동</LightText></MenuItem>
                    </SelectBox>
                    <RowBox sx={{ justifyContent: "flex-end", mt: 3 }}>
                        <CommonBtn type="submit" sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                    </RowBox>
                </form>
                { searchData && (
                    <SearchInfo data={facility_data}/>
                )}
            </FormBox>
        </Background>
    );
};

export default Search;