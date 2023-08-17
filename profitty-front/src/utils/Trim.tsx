//빈칸 입력 확인 trim === "" false, trim !== "" true
export const checkTrim = (textProps: string) => {
    if (textProps.trim() === "") {
        return false;
    }
    return true;
};