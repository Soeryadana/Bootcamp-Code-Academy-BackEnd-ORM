import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get('/',indexCtrl.countriesCrtl.findAll);
router.get('/:id',indexCtrl.countriesCrtl.findOne);
router.post('/',indexCtrl.countriesCrtl.create);
router.put('/:id',indexCtrl.countriesCrtl.update);
router.delete('/:id',indexCtrl.countriesCrtl.deleted);

export default router;