import { useState, useRef } from "react";
import Background from "../../components/Layouts/Background";
import FormInput from "../../components/Inputs/FormInput";
import FormBox from "../../components/Layouts/FormBox";
import RowBox from "../../components/Layouts/RowBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import CommonBtn from "../../components/Inputs/CommonBtn";
import FileBtn from "../../components/Inputs/FileBtn";
import LinkTag from "../../components/Inputs/LinkTag";
import FormInputError from "../../components/Inputs/FormInputError";
import { checkTrim } from "../../utils/Trim";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { coach_register } from "../../services/userServices";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { checkIdNumB, checkIdNumF } from "../../utils/Regex";

const CoachReg = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const [sports, setSports] = useState("");
    const [region, setRegion] = useState("");
    const [IdNumCheck, setIdNumCheck] = useState("");
    const [sportsId, setSportsId] = useState("");
    const [fileList, setFileList] = useState<File[]>([]);
    const [fileCheck, setFileCheck] = useState("");

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          const newFileList: File[] = Array.from(event.target.files);
          setFileList(newFileList);
        }
    };

    const truncateFileName = (fileName: string) => {
        if (fileName.length > 20) {
            const extension = fileName.split('.').pop();
            const truncatedName = fileName.substring(0, 20);
            return truncatedName + '···.' + extension;
        }
        return fileName;
    }

    const downloadFile = (file: File) => {
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleRegister = async (data: object) => {
        try{
            const response = await coach_register(data);
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
            sports: data.get("sports") as string,
            region: data.get("region") as string,
            IdNumF: data.get("IdNumF") as string,
            IdNumB: data.get("IdNumB") as string,
            sportsId: data.get("sportsId") as string,
        };
        const { sports, region, IdNumF, IdNumB, sportsId } = joinData;

        if (!checkTrim(sports)) setSports("희망 종목을 입력해주세요.");
        else setSports("");
        
        if (!checkTrim(region)) setRegion("희망 근무지역 입력해주세요.");
        else setRegion("");

        if (!checkTrim(IdNumF) || !checkTrim(IdNumB)) setIdNumCheck("주민등록번호를 입력해주세요.");   
        else {
            if (!checkIdNumF(IdNumF)) setIdNumCheck("주민등록번호 앞자리가 올바르지 않습니다.");
            else if (!checkIdNumB(IdNumB)) setIdNumCheck("주민등록번호 뒷자리가 올바르지 않습니다.");
            else setIdNumCheck("");
        }

        if (!checkTrim(sportsId)) setSportsId("체육 지도자 등록번호를 입력해주세요.");
        else setSportsId("");

        if (fileList.length === 0) setFileCheck("증빙 서류를 첨부해주세요.");
        else setFileCheck("");

        fileList.forEach(file => {
            data.append('files', file);
        });

        if (checkTrim(sports) && checkTrim(region) && checkTrim(sportsId) && checkTrim(IdNumB) && checkTrim(IdNumF) && fileList.length !== 0) {
            if (checkIdNumF(IdNumF) && checkIdNumB(IdNumB)){
                handleRegister(data);
            }
        }
    };

    return (
        <Background>
            <FormBox>
                <LinkTag to="/"><ExtraBoldText className="logo" sx={{ mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText></LinkTag>
                <LightText className="font32" sx={{ mb: 2 }}>체육지도자 등록 하기</LightText>
                <form onSubmit={handleSubmit}>
                    <FormInput placeholder="희망 종목 ex) 헬스, 축구, 농구" name="sports" />
                    <FormInputError>{sports}</FormInputError>
                    <FormInput placeholder="희망 근무지역" name="region" />
                    <FormInputError>{region}</FormInputError>
                    <RowBox spacing={1}>
                        <FormInput placeholder="주민등록번호(앞)" name="IdNumF" />
                        <LightText className="font16">-</LightText>
                        <FormInput type="password" placeholder="주민등록번호(뒤)" name="IdNumB" />
                    </RowBox>
                    <FormInputError>{IdNumCheck}</FormInputError>
                    <FormInput placeholder="체육 지도자 등록번호" name="sportsId" />
                    <FormInputError>{sportsId}</FormInputError>
                    <RowBox spacing={1}>
                        <FormInput placeholder="증빙 서류" name="file" onClick={handleFileButtonClick} />
                        <FileBtn onClick={handleFileButtonClick}>
                            <ExtraBoldText className="Efont16">파일 선택</ExtraBoldText>
                            <input type="file" ref={fileInputRef} name="files" style={{ display: "none" }} onChange={onChangeFile} />
                        </FileBtn>
                    </RowBox>
                    <FormInputError>{fileCheck}</FormInputError>
                    { fileList.length > 0 &&  (
                        <RowBox sx={{ backgroundColor: "#3D3D3D", borderRadius: 1, padding: "10px" }}>
                            <LightText className="font16" sx={{ cursor: "pointer" }} onClick={() => downloadFile(fileList[0])}>
                                    {truncateFileName(fileList[0].name)}
                            </LightText>
                            <FileDownloadIcon sx={{ color: "#FCFCFC", cursor: "pointer" }} onClick={() => downloadFile(fileList[0])} />
                      </RowBox>
                    )}
                    <RowBox mt={28} sx={{ justifyContent: "flex-end" }}>
                        <CommonBtn type="submit" sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                    </RowBox>
                </form>
            </FormBox>
        </Background>
    );
};

export default CoachReg;