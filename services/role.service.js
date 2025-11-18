import role from "../models/role.js"

export const createRole = async (data) => {
    return await role.create(data);
};
export const getRoles = async () => {
    return await role.find();
};