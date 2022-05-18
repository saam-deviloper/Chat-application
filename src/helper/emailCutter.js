export const emailCutter = (email) =>{
    let result = email.split('@');
    return result[0];
}