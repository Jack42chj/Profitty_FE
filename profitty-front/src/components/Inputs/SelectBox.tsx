import { styled } from "@mui/system";
import { Select, SelectProps, SxProps, SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

const CustomSelect = styled(Select)({
    backgroundColor: "#FCFCFC",
    height: 43.3,
    width: "100%",
    borderRadius: 4,
    marginBottom: 20,
    "& .MuiOutlinedInput-input": {
        paddingLeft: "10px",
    },
});

interface SelectBoxProps extends SelectProps {
    children: ReactNode;
    sx?: SxProps;
}

const SelectBox: React.FC<SelectBoxProps> = ({ children, ...props }) => {
    return (
        <CustomSelect {...props}>
            {children}
        </CustomSelect>
    );
};

export default SelectBox;