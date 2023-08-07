import styled from "@emotion/styled";
import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const CustomText = styled(Typography)({
    fontFamily: "Pretendard-Light",
    color: "#FCFCFC",
    fontWeight: "normal",
    fontStyle: "normal",
});

interface LightTextProp extends TypographyProps {
    children: ReactNode;
}

const LightText: React.FC<LightTextProp>= ({ children, ...props }) => {
    return(
        <CustomText {...props}>
            {children}
        </CustomText>
    );
};

export default LightText;