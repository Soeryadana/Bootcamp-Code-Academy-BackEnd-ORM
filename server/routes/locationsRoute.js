import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get('/',indexCtrl.locationsCtrl.findAll);
router.get('/:id',indexCtrl.locationsCtrl.findOne);
router.post('/',indexCtrl.locationsCtrl.create);
router.put('/:id',indexCtrl.locationsCtrl.update);
router.delete('/:id',indexCtrl.locationsCtrl.deleted);

export default router;