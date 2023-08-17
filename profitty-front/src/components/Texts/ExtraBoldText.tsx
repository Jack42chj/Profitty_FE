import { styled } from "@mui/system";
import { Typography, TypographyProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomText = styled(Typography)(({theme}) => ({
    fontFamily: "Pretendard-ExtraBold",
    color: "#FCFCFC",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "35px",
    "&.Efont16": {
        fontSize: "16px",
    },
    "&.logo, &.facil": {
        fontSize: "28px",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "55px",
    },
}));

interface ExtraBoldTextProps extends TypographyProps {
    children: ReactNode;
    sx?: SxProps;
}

const ExtraBoldText: React.FC<ExtraBoldTextProps>= ({ children, ...props }) => {
    return(
        <CustomText {...props}>
            {children}
        </CustomText>
    );
};

export default ExtraBoldText;