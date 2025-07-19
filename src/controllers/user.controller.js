const User = require('../models/user.model');

exports.user = async (request, response) => {
    try {
        const user = await User.create(request.body);
        response.status(201).json(user);
    } catch (error) {
        response.status(400).json({ error: error.message});
    }
};

exports.users = async (request, response) => {
    try {
        const users = await User.find();
        response.json(users);
    } catch (error) {
        response.status(400).json({
            error: error.message
        })
    }
};

exports.getuser = async (request, response) => {
    try {
        const user = await User.findById(request.params.id);
        if (!user) 
            return response.status(404).json({
        message: 'User not found.'});
        response.json(user);
    } catch (error) {
        response.status(400).json({
            error: error.message
        })
    }
};

exports.updateuser = async (request, response) => {
    try {
        const user = await User.findByIdAndUpdate(request.params.id, request.body, {
            new: true
        });
        if (!user) 
            return response.status(404).json({
        message: 'User not found.'});
        response.json(user);
    } catch (error) {
        response.status(400).json({
            error: error.message
        })
    }
};

exports.deleteuser = async (request, response) => {
    try {
        const user = await User.findIdByIdAndDelete(request.params.id);
        if (!user)
            return response.status(404).json({
        message: 'User not found.'});
        response.json(user);
    } catch (error) {
        response.status(400).json({
            error: error.message
        })
    }
};