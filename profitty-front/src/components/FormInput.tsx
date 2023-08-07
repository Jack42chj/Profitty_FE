import { InputBase, InputProps } from "@mui/material";
import styled from "@emotion/styled";

const CustomInput = styled(InputBase)({
    backgroundColor: "#FCFCFC",
    width: "100%",
    height: 43.3,
    borderRadius: 4,
    marginBottom: 10,
    padding: "0 16px",
    "&:hover" : {
        border: "2px solid #369FFF",
    },
});

interface FormInputProps extends InputProps {}

const FormInput: React.FC<FormInputProps>= (props) => {
    return(
        <CustomInput {...props} />
    );
};

export default FormInput;