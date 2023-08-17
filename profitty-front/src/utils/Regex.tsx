const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=`-])(?=.*[0-9]).{8,25}$/;
const nameRegex =  /^[가-힣]{2,4}$/;
const Front_IdNumRegex = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])$/;
const Back_IdNumRegex = /[1-4]\d{6}$/;

//이메일 확인 정규식 성립시: true
export const checkEmail = (email: string) => {
    if(!emailRegex.test(email)) return false;
    return true;
};
//전화번호 확인 정규식 성립시: true
export const checkPhone = (phoneNum: string) => {
    if(!phoneRegex.test(phoneNum)) return false;
    return true;
};
//한글 이름 확인 정규식 성립시: true
export const checkName = (name: string) => {
    if(!nameRegex.test(name)) return false;
    return true;
}
//비밀번호 확인 정규식 성립시: true
export const checkPassword = (passwd: string) => {
    if(!passwordRegex.test(passwd)) return false;
    return true;
};
//주민등록번호 앞자리 확인 정규식 성립시: true
export const checkIdNumF = (num: string) => {
    if(!Front_IdNumRegex.test(num)) return false;
    return true;
};
//주민등록번호 뒷자리 확인 정규식 성립시: true
export const checkIdNumB = (num: string) => {
    if(!Back_IdNumRegex.test(num)) return false;
    return true;
};