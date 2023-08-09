import { InputBase, InputProps, SxProps } from "@mui/material";
import { styled } from "@mui/system";

const CustomInput = styled(InputBase)({
    backgroundColor: "#FCFCFC",
    width: "100%",
    height: 43.3,
    borderRadius: 4,
    marginBottom: 20,
    padding: "0 10px",
    '&.Mui-focused': { 
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