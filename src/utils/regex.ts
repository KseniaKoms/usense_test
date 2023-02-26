export const easyPass = new RegExp(/^[a-zA-Z]+$|^[\d]+$|^[\W_]+$/);
export const strongPass = new RegExp(/(?=.*[a-zA-Z])(?=.*[\W._])(?=.*[\d])/);
