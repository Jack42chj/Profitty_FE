import { ReactNode } from "react";
import { FormHelperText, FormHelperTextProps, SxProps } from "@mui/material";
import { styled } from "@mui/system";

const CustomInput = styled(FormHelperText)({
    fontFamily: "Pretendard-ExtraBold",
    color: "#FF6060",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "14px",
    marginBottom: 20,
});

interface FormInputProps extends FormHelperTextProps {
    children: ReactNode;
    sx?: SxProps;
}

const FormInputError: React.FC<FormInputProps> = ({ children, ...props}) => {
    return(
        <CustomInput {...props}>
            {children}
        </CustomInput>
    );
};

export default FormInputError;