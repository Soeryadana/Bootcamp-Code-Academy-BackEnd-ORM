import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get('/',indexCtrl.departmentsCtrl.findAll);
router.get('/:id',indexCtrl.departmentsCtrl.findOne);
router.post('/',indexCtrl.departmentsCtrl.create);
router.put('/:id',indexCtrl.departmentsCtrl.update);
router.delete('/:id',indexCtrl.departmentsCtrl.deleted);

export default router;