import styled from "@emotion/styled";
import { Stack, StackProps } from "@mui/material";
import { ReactNode } from "react";

const CustomStack = styled(Stack)({
  justifyContent: "center",
  width: "80%",
  minHeight: "100vh",
  margin: "0 auto",
});

interface FormBoxProps extends StackProps {
    children: ReactNode;
}

const FormBox: React.FC<FormBoxProps> = (props) => <CustomStack>{props.children}</CustomStack>;

export default FormBox;