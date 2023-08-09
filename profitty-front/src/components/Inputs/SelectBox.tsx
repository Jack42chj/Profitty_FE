import styled from "@emotion/styled";
import { Select, SelectProps, SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

const CustomSelect = styled(Select)({
    backgroundColor: "#FCFCFC",
    height: 43.3,
    width: "100%",
    borderRadius: 4,
    marginBottom: 20,
});

interface SelectBoxProp extends SelectProps {
    children: ReactNode;
};

const SelectBox: React.FC<SelectBoxProp>= ({ children, ...props }) => {
    return(
        <CustomSelect {...props}>
            {children}
        </CustomSelect>
    );
};

export default SelectBox;