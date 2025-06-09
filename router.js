import { Router } from "express";
import FiguraController from '../controllers/FiguraController.js';

const router = Router();

const figuraController = new FiguraController();


router.get('/', figuraController.formularioCalcularArea);
router.post('/calcular', figuraController.calcularAreaFiguras);

export default router;