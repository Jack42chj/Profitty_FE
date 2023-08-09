import styled from "@emotion/styled";
import { Checkbox } from "@mui/material";

const CustomCheck = styled(Checkbox)({
    color: "#369FFF",
    "&.Mui-checked": {
        color: "#369FFF",
    },
    '& .MuiSvgIcon-root': { 
        fill: "#FCFCFC",
    },
});

const CheckBox = ({ ...props }) => {
    return(
        <CustomCheck {...props} />
    );
};

export default CheckBox;