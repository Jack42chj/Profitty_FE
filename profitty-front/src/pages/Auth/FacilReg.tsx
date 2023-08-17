import React, { useState, useRef } from "react";
import Background from "../../components/Layouts/Background";
import FormInput from "../../components/Inputs/FormInput";
import FormBox from "../../components/Layouts/FormBox";
import RowBox from "../../components/Layouts/RowBox";
import ExtraBoldText from "../../components/Texts/ExtraBoldText";
import LightText from "../../components/Texts/LightText";
import CommonBtn from "../../components/Inputs/CommonBtn";
import LinkTag from "../../components/Inputs/LinkTag";
import FormInputError from "../../components/Inputs/FormInputError";
import FileBtn from "../../components/Inputs/FileBtn";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { checkTrim } from "../../utils/Trim";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { facility_register } from "../../services/userServices";

const FacilReg = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const picInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handlePicButtonClick = () => {
        if (picInputRef.current) {
            picInputRef.current.click();
        }
    };

    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [sports, setSports] = useState("");
    const [phone, setPhone] = useState("");
    const [picFile, setPicFile] = useState<File[]>([]);
    const [picCheck, setPicCheck] = useState("");
    const [file, setFile] = useState<File[]>([]);
    const [fileCheck, setFileCheck] = useState("");

    const onChangePicFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newPicList: File[] = Array.from(event.target.files);
            setPicFile(newPicList);
        }
    };

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFileList: File[] = Array.from(event.target.files);
            setFile(newFileList);
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
            const response = await facility_register(data);
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
            address: data.get("address") as string,
            name: data.get("name") as string,
            sports: data.get("sports") as string,
            phone: data.get("phone") as string,
        };
        const { address, name, sports, phone } = joinData;

        if (!checkTrim(address)) setAddress("주소를 입력해주세요.");
        else setAddress("");
        
        if (!checkTrim(name)) setName("시설 이름을 입력해주세요.");
        else setName("");

        if (!checkTrim(phone)) setPhone("시설 번호를 입력해주세요.");
        else setPhone("");

        if (!checkTrim(sports)) setSports("가능 종목을 입력해주세요.");
        else setSports("");

        if (picFile.length === 0) setPicCheck("사진을 첨부해주세요.");
        else setPicCheck("");

        if (file.length === 0) setFileCheck("증명 서류를 첨부해주세요.");
        else setFileCheck("");

        picFile.forEach(file => {
            data.append('pic', file);
        });
          
        file.forEach(file => {
            data.append('files', file);
        });

        if (checkTrim(sports) && checkTrim(address) && checkTrim(name) && checkTrim(phone) && picFile.length !== 0 && file.length !== 0 ) {
            handleRegister(data);
        }
    };

    return (
        <Background>
            <FormBox>
                <LinkTag to="/"><ExtraBoldText className="logo" sx={{ mb: 1, letterSpacing: -1.2 }}>Profitty</ExtraBoldText></LinkTag>
                <LightText className="font32" sx={{ mb: 2 }}>장소 등록 신청 하기</LightText>
                <form onSubmit={handleSubmit}>
                    <FormInput placeholder="주소" name="address" />
                    <FormInputError>{address}</FormInputError>
                    <FormInput placeholder="시설명" name="name" />
                    <FormInputError>{name}</FormInputError>
                    <FormInput placeholder="가능 종목" name="sports" />
                    <FormInputError>{sports}</FormInputError>
                    <FormInput placeholder="시설 전화번호" name="phone" />
                    <FormInputError>{phone}</FormInputError>
                    <RowBox spacing={1}>
                        <FormInput placeholder="시설 사진" name="pic" onClick={handlePicButtonClick} />
                        <FileBtn onClick={handlePicButtonClick}>
                            <ExtraBoldText className="Efont16">파일 선택</ExtraBoldText>
                            <input type="file" ref={picInputRef} name="pic" style={{ display: "none" }} onChange={onChangePicFile} />
                        </FileBtn>
                    </RowBox>
                    <FormInputError>{picCheck}</FormInputError>
                    { picFile.length > 0 &&  (
                        <RowBox sx={{ backgroundColor: "#3D3D3D", borderRadius: 1, padding: "10px", mb: "20px" }}>
                            <LightText className="font16" sx={{ cursor: "pointer" }} onClick={() => downloadFile(picFile[0])}>
                                    {truncateFileName(picFile[0].name)}
                            </LightText>
                            <FileDownloadIcon sx={{ color: "#FCFCFC", cursor: "pointer" }} onClick={() => downloadFile(picFile[0])} />
                        </RowBox>
                    )}
                    <RowBox spacing={1}>
                        <FormInput placeholder="증빙 서류" name="files" onClick={handleFileButtonClick} />
                        <FileBtn onClick={handleFileButtonClick}>
                            <ExtraBoldText className="Efont16">파일 선택</ExtraBoldText>
                            <input type="file" ref={fileInputRef} name="files" style={{ display: "none" }} onChange={onChangeFile} />
                        </FileBtn>
                    </RowBox>
                    <FormInputError>{fileCheck}</FormInputError>
                    { file.length > 0 &&  (
                        <RowBox sx={{ backgroundColor: "#3D3D3D", borderRadius: 1, padding: "10px" }}>
                            <LightText className="font16" sx={{ cursor: "pointer" }} onClick={() => downloadFile(file[0])}>
                                    {truncateFileName(file[0].name)}
                            </LightText>
                            <FileDownloadIcon sx={{ color: "#FCFCFC", cursor: "pointer" }} onClick={() => downloadFile(file[0])} />
                        </RowBox>
                    )}
                    <RowBox mt={20} sx={{ justifyContent: "flex-end" }}>
                        <CommonBtn type="submit" sx={{ fontSize: "16px" }}>Continue</CommonBtn>
                    </RowBox>
                </form>
            </FormBox>
        </Background>
    );
};

export default FacilReg;