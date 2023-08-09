import { styled } from "@mui/system";
import { Stack, StackProps, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CustomStack = styled(Stack)({
    justifyContent: "space-between",
    alignItems: "center"
});

interface FormBoxProps extends StackProps {
    children: ReactNode;
    sx?: SxProps;
}

const RowBox: React.FC<FormBoxProps>= ({ children, ...props }) => {
    return(
        <CustomStack direction="row" {...props}>
            {children}
        </CustomStack>
    );
};

export default RowBox;