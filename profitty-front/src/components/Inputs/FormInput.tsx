import { InputBase, InputProps, SxProps } from "@mui/material";
import styled from "styled-components";

const CustomInput = styled(InputBase)({
    backgroundColor: "#FCFCFC",
    color: "#7F7F7F",
    width: "100%",
    height: 43.3,
    borderRadius: 4,
    marginBottom: 20,
    padding: "0 10px",
    ".MuiCheckbox-root" : {
        border: "2px solid #369FFF",
    },
});

interface FormInputProps extends InputProps {
    sx?: SxProps;
}

const FormInput: React.FC<FormInputProps> = (props) => {
    return(
        <CustomInput {...props} />
    );
};

export default FormInput;