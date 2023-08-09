import { styled } from "@mui/system";
import { Stack, StackProps } from "@mui/material";
import { ReactNode } from "react";

const CustomStack = styled(Stack)(({theme}) => ({
  justifyContent: "center",
  width: "90%",
  margin: "0 auto",
  marginTop: 30,
  [theme.breakpoints.up('md')]: {
    justifyContent: "flex-start",
    marginTop: 60,
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: "flex-start",
    marginTop: 60,
  },
}));

interface FormBoxProps extends StackProps {
    children: ReactNode;
}

const FormBox: React.FC<FormBoxProps> = (props) => <CustomStack>{props.children}</CustomStack>;

export default FormBox;