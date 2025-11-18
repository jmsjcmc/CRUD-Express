import * as roleService from "../services/role.service.js"

export const createRole = async (req, res) => {
    const role = await roleService.createRole(req.body);
    res.status(201).json(role);
};

export const getRoles = async (req, res) => {
    res.json(await roleService.getRoles());
};