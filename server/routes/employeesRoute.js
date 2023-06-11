import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get('/',indexCtrl.employeesCrtl.findAll);
router.get('/:id',indexCtrl.employeesCrtl.findOne);
router.post('/',indexCtrl.employeesCrtl.create);
router.put('/:id',indexCtrl.employeesCrtl.update);
router.delete('/:id',indexCtrl.employeesCrtl.deleted);

export default router;