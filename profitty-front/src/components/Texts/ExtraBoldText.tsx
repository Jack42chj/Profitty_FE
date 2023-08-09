import styled from "@emotion/styled";
import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const CustomText = styled(Typography)({
    fontFamily: "Pretendard-ExtraBold",
    color: "#FCFCFC",
    fontWeight: "normal",
    fontStyle: "normal",
});

interface ExtraBoldTextProps extends TypographyProps {
    children: ReactNode;
}

const ExtraBoldText: React.FC<ExtraBoldTextProps>= ({ children, ...props }) => {
    return(
        <CustomText {...props}>
            {children}
        </CustomText>
    );
};

export default ExtraBoldText;