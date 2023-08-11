//빈칸 입력 확인 trim === "" false, trim !== "" true

interface TextProps {
    text: string;
}

export const checkTrim = (textProps: TextProps) => {
    if (textProps.text.trim() === "") {
        return false;
    }
    return true;
};