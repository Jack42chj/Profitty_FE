import { styled } from "@mui/system";
import { Typography, TypographyProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomText = styled(Typography)(({theme}) => ({
    fontFamily: "Pretendard-ExtraBold",
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