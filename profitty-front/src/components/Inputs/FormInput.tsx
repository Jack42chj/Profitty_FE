import { InputBase, InputProps, SxProps } from "@mui/material";
import { styled } from "@mui/system";

const CustomInput = styled(InputBase)({
    backgroundColor: "#FCFCFC",
    width: "100%",
    height: 43.3,
    borderRadius: 4,
    padding: "0 10px",
    '&.Mui-focused': { 
        border: "2px solid #369FFF",
    },
});

interface FormInputProps extends InputProps {
    sx?: SxProps;
    onChange?: (e: any) => void;
}

const FormInput: React.FC<FormInputProps> = (props) => {
    return(
        <CustomInput {...props} onChange={props.onChange}/>
    );
};

export default FormInput;