import express from 'express';
const keepAliveRouter = express.Router();

// keep alive route to prevent the render server from sleeping

keepAliveRouter.get('/keep-alive', (req, res) => {
    res.status(200).send("server is awake");
});

export default keepAliveRouter;