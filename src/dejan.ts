import { Router } from "express";

const dejanRouter = Router();

dejanRouter.get('/dejan', (_req, res) =>{
    res.send("Affontre moi regarde")
})

export default dejanRouter;