import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import roleRoutes from "./routes/role.routes.js";
import userRoleRoutes from "./routes/userRole.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/user-roles', userRoleRoutes);

export default app;