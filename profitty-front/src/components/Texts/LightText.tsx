import { styled } from "@mui/system";
import { Typography, TypographyProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomText = styled(Typography)(({theme}) => ({
    fontFamily: "Pretendard-Light",
    color: "#FCFCFC",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "35px",
    [theme.breakpoints.up('md')]: {
        fontSize: "35px",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "45px",
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