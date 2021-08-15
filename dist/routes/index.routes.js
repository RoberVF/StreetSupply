"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const main_controllers_1 = require("../controllers/main.controllers");
router.route('/').get((req, res) => main_controllers_1.mainPage(req, res, "index"));
router.route('/mobile').get((req, res) => main_controllers_1.mainPage(req, res, "mobile"));
router.route('/comprar').get(main_controllers_1.comprar);
router.route('/mostrarDatos').post(main_controllers_1.createData).get(main_controllers_1.getData);
router.route('/incluir').get(main_controllers_1.incluirDatos);
router.route('/verDatos').get(main_controllers_1.verDatos);
//Lista equipos
const equipos = [
    "PSG", "Lyon", "City", "United"
];
//productCards
for (let i of equipos) {
    router.route(`/${i.toString()}`).get((req, res) => main_controllers_1.productCards(req, res, i.toString(), "ligue 1"));
}
//productLink
for (let i of equipos) {
    router.route(`/${i.toString()}/:id`).get(main_controllers_1.productLink);
}
module.exports = router;
