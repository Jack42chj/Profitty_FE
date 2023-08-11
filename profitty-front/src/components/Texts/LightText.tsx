import { styled } from "@mui/system";
import { Typography, TypographyProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomText = styled(Typography)(({theme}) => ({
    fontFamily: "Pretendard-Light",
    color: "#FCFCFC",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "35px",
    "&.font16": {
        fontSize: "16px",
    },
    "&.font28": {
        fontSize: "28px",
    },
    "&.coach, &.text": {
        fontSize: "20px",
    },
    "&.font32": {
        fontSize: "32px",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "55px",
        "&.coach, &.text": {
            fontSize: "28px",
        },
    },
}));

interface LightTextProp extends TypographyProps {
    children: ReactNode;
    sx?: SxProps;
}

const LightText: React.FC<LightTextProp>= ({ children, ...props }) => {
    return(
        <CustomText {...props}>
            {children}
        </CustomText>
    );
};

export default LightText;