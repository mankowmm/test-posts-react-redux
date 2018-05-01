const regexAtLeastOneLoweOneUpperOneNumber = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const USERNAME_VALIDATION_MESSAGE = 'username not valid - please provide at least 8 characters';
export const PASSWORD_VALIDATION_MESSAGE = `password not valid - please follow rules:
        password must contain 8 characters, at least one small letter, at least one capital letter, at least one number`;


export class AuthHelper {
    static isUserNameValid (username) {
        if (username && username.length >= 5) {
          return true;
        }
        return false;
      }
    
    static isPasswordValid (password) {
        if (password && password.length >= 8) {
            const isRegexMatching = regexAtLeastOneLoweOneUpperOneNumber.test(password);
            if (isRegexMatching) {
            return true;
            }
        }
        return false;
    }
}