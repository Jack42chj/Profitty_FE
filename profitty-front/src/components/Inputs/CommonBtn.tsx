import { styled } from "@mui/system";
import { Button, ButtonProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomBtn = styled(Button)(({theme}) => ({
    border: "1px solid #FCFCFC",
    color: "#FCFCFC",
    borderRadius: 60,
    width: 97.5,
    height: 44.3,
    textTransform: "none",
    "&.signupBtn": {
        width: 185,
        height: 55,
    },
    "&.coachBtn": {
        width: 120,
        height: 43,
    },
    [theme.breakpoints.up('lg')]: {
        "&.signupBtn": {
            width: 248,
            height: 85,
        },
        "&.coachBtn": {
            width: 200,
            height: 63,
        },
    },
}));

interface CommonBtnProp extends ButtonProps {
    children: ReactNode;
    sx?: SxProps;
}

const CommonBtn: React.FC<CommonBtnProp>= ({ children, ...props }) => {
    return(
        <CustomBtn {...props}>
            {children}
        </CustomBtn>
    );
};

export default CommonBtn;