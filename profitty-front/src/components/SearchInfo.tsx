import { Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import LightText from "./Texts/LightText";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RowBox from "./Layouts/RowBox";

interface FacilityData {
    name: string;
    address: string;
    phone: string;
    sports: string;
    manager: string;
}

interface SearchInfoProps {
    data: Record<number, FacilityData>;
}

const SearchInfo: React.FC<SearchInfoProps> = ({ data }) => {
    const facilityArray = Object.values(data);
    
    return (
        <Box sx={{ width: "100%", maxHeight: "300px", backgroundColor: "#242424", mt: 5, overflow: "auto", borderRadius: 2, 
            "::-webkit-scrollbar": { width: "5px", backgroundColor: "#000000" },
            "::-webkit-scrollbar-thumb": { backgroundColor: "#369FFF" }
        }}>
            {facilityArray.map((list: FacilityData, idx: number) => (
                <Accordion sx={{ backgroundColor: "#242424", paddingLeft: "10px" }} key={idx}>
                    <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{ color: "#369FFF", fontSize: "32px" }} />}>
                        <LightText className="font16">{list.name}</LightText>
                    </AccordionSummary>
                    <AccordionDetails>
                        <LightText className="font16">{list.address}</LightText>
                        <RowBox sx={{ justifyContent: "flex-start"}} spacing={6}>
                            <LightText className="font16">{list.manager}</LightText>
                            <LightText className="font16">{list.phone}</LightText>
                        </RowBox>
                        <LightText className="font16">{list.sports}</LightText>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default SearchInfo;