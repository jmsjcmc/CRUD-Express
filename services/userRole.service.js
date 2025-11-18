import userRole from "../models/userRole.js"

export const assignRole = async (userID, roleID) => {
    return await userRole.create({userID, roleID});
};

export const getUserRole = async (userID) => {
    return await userRole.find({userID}).populate('roleID');
};