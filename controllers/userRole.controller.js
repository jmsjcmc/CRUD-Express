import * as userRoleService from "../services/userRole.service.js"

export const assignRole = async (req, res) => {
    const result = await userRoleService.assignRole(
        req.body.userID,
        req.body.roleID
    );
    res.status(201).json(result);
};

export const getUserRoles = async (req, res) => {
    res.json(await userRoleService.getUserRole(req.params.userID));
};