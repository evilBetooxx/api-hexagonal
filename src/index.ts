import express from 'express';
import signale from 'signale';
import UserRouter from './user/interfaces/controllers/UserController';
import PostRouter from './post/interfaces/controllers/PostControllers';

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/user', UserRouter);
app.use('/post', PostRouter);

app.listen(port, () => {
    signale.success(`Server running on port ${port}`);
});