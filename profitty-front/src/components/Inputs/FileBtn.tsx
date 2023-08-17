import { styled } from "@mui/system";
import { Button, ButtonProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomBtn = styled(Button)(({theme}) => ({
    backgroundColor: "#369FFF",
    color: "#FCFCFC",
    borderRadius: 4,
    textTransform: "none",
    height: 43,
    width: 110,
    
}));

interface CommonBtnProp extends ButtonProps {
    children: ReactNode;
    sx?: SxProps;
}

const FileBtn: React.FC<CommonBtnProp>= ({ children, ...props }) => {
    return(
        <CustomBtn {...props}>
            {children}
        </CustomBtn>
    );
};

export default FileBtn;