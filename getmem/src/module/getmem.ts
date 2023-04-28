import express, { Request, Response }from 'express';
import os from 'os';

const router = express.Router();
const meminfo = os.totalmem();
const message = "this is app1. server memory size : " + meminfo + "\n";

router.get('/api/getmem', (req: Request, res: Response) => {
  console.log(message);
  res.send({message});
});

export { router as getmemRouter }