import styled from "@emotion/styled";
import { Stack, StackProps } from "@mui/material";
import { ReactNode } from "react";

const CustomStack = styled(Stack)({
    backgroundColor: "#023E5D",
    height: "100%",
    width: "100%",
    minHeight: "100vh"
});

interface BackgroundProps extends StackProps {
    children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children, ...props }) => {
    return (
        <CustomStack {...props}>
            {children}
        </CustomStack>
    );
};

export default Background;