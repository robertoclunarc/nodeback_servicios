import { Router } from "express";
import {
    solpedAll, solpedNew, solpedOne, updateSolped, solpedMasterDetalle,
    solpedAsignacion,
    misSolped,
    solpedCambioFase
} from "../../controllers/compras/solped.controller";
import { solpedetalledata } from "../../controllers/compras/solpeddetalle.controller";
import { trazassolped, inserttrazasolped } from "../../controllers/compras/solpedtraza.controller";
import { insertOC, updateOC, todasOC, todasMasterDetalle } from "../../controllers/compras/ordencompra.controller";
import { insertdetalleOC, detalleOcAll } from "../../controllers/compras/detalleoc.cotroller";
import { allproveedores, insertarProveedor } from "../../controllers/compras/proveedores.controller";

const router = Router();

router.get("/api/solped", solpedAll);
router.get("/api/missolped/:idSegUsuario", misSolped);
router.post("/api/solped", solpedNew);
router.get("/api/solped/:idSolped", solpedOne);
router.put("/api/solped/:idSolped", updateSolped);
router.get("/api/solpedydetalles", solpedMasterDetalle);
router.put("/api/asignacionsolped/:idSolped", solpedAsignacion);
router.put("/api/cambiofasesolped", solpedCambioFase);

//Solped Detalles
router.get("/api/detallesolped/:idSolped", solpedetalledata);

//Solped Trazas
router.get("/api/trazassolped/:idSolped", trazassolped);
router.post("/api/trazassolped", inserttrazasolped);

//Orden de compra
router.get("/api/oc", todasOC);
router.post("/api/oc", insertOC);
router.put("/api/oc/:idComprasOC", updateOC);
router.get("/api/ocmasterdetalle/", todasMasterDetalle);

//Orden de compra detalle
router.get("/api/ocdetalle", detalleOcAll);
router.post("/api/ocdetalle", insertdetalleOC);

//proveedores
router.get("/api/proveedores", allproveedores);
router.post("/api/proveedores", insertarProveedor);

export default router;