import express, {RequestHandler} from 'express';
import { createUrl, deleteUrl, getAllUrl, getUrl } from '../controllers/shortUrl';

const router = express.Router();

router.post("/shortUrl", createUrl as RequestHandler)
router.get("/shortUrl", getAllUrl as RequestHandler)
router.get("/shortUrl/:id", getUrl as RequestHandler)
router.delete("/shortUrl/:id", deleteUrl as RequestHandler)


export default router