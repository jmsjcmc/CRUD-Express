import user from "../models/user"
import userRole from "../models/userRole";

export const createUser  = async (data) => {
    const user = await user.create(data);
    const defaultRole = 'user';
    const role = await role.findOne({name: defaultRole});
    if (role){
        await userRole.create({userID: user._id, roleID: role._id});
    }
    return user;
};

export const getUsers = async () => {
    return await user.find();
};