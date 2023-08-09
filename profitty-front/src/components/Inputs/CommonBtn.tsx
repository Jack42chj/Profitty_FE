import { styled } from "@mui/system";
import { Button, ButtonProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomBtn = styled(Button)({
    border: "1px solid #FCFCFC",
    color: "#FCFCFC",
    borderRadius: 60,
    width: 97.5,
    height: 44.3,
    textTransform: "none",
});

interface CommonBtnProp extends ButtonProps {
    children: ReactNode;
    sx: SxProps;
}

const CommonBtn: React.FC<CommonBtnProp>= ({ children, ...props }) => {
    return(
        <CustomBtn {...props}>
            {children}
        </CustomBtn>
    );
};

export default CommonBtn;