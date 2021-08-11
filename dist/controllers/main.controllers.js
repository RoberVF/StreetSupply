"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productLink = exports.productCards = exports.verDatos = exports.incluirDatos = exports.getData = exports.createData = exports.mainPage = void 0;
const Data_1 = __importDefault(require("../models/Data"));
async function mainPage(req, res) {
    res.render('index');
}
exports.mainPage = mainPage;
async function createData(req, res) {
    console.log(req.body);
    const { name, price, team, liga, year, imagePath, imagePath2, imagePath3 } = req.body;
    const newData = {
        name,
        price,
        team,
        liga,
        year,
        imagePath,
        imagePath2,
        imagePath3
    };
    const data = new Data_1.default(newData);
    await data.save();
    return res.json({
        message: "Dato guardado correctamente",
        data
    });
}
exports.createData = createData;
async function getData(req, res) {
    const datas = await Data_1.default.find();
    return res.json(datas);
}
exports.getData = getData;
async function incluirDatos(req, res) {
    res.render("pages/incluirDatos");
}
exports.incluirDatos = incluirDatos;
async function verDatos(req, res) {
    const todos = await Data_1.default.find();
    res.render("pages/verDatos", {
        todos
    });
}
exports.verDatos = verDatos;
async function productCards(req, res, equipo, liga) {
    const equipoConcreto = await Data_1.default.find({ "team": `${equipo}` });
    const ligaConcreta = await Data_1.default.find({ "ligue": `${liga}` });
    res.render(`teams/productCards`, {
        ligaConcreta,
        equipoConcreto
    });
    console.log(ligaConcreta, equipoConcreto);
}
exports.productCards = productCards;
async function productLink(req, res) {
    const { id } = req.params;
    const product = await Data_1.default.findById(id);
    console.log(product);
    res.render('teams/product', { product });
}
exports.productLink = productLink;
