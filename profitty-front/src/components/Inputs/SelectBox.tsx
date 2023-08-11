import { styled } from "@mui/system";
import { Select, SelectProps, SxProps } from "@mui/material";
import { ReactNode } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomSelect = styled(Select)({
    backgroundColor: "#FCFCFC",
    height: 43.3,
    width: "100%",
    borderRadius: 4,
    "& .MuiOutlinedInput-input": {
        paddingLeft: "10px",
    },
});

interface SelectBoxProps extends SelectProps {
    children: ReactNode;
    sx?: SxProps;
    onChange?: (e: any) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ children, ...props }) => {
    return (
        <CustomSelect {...props} onChange={props.onChange} IconComponent={KeyboardArrowDownIcon}
            sx={{
                "& .MuiSvgIcon-root": {
                    color: "#369FFF",
                    fontSize: "32px",
                },
            }}
        >
            {children}
        </CustomSelect>
    );
};

export default SelectBox;