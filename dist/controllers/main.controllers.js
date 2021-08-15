"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productLink = exports.productCards = exports.verDatos = exports.incluirDatos = exports.getData = exports.createData = exports.comprar = exports.mainPage = void 0;
const Data_1 = __importDefault(require("../models/Data"));
async function mainPage(req, res, page) {
    const teamProduct = await Data_1.default.find({ "top": "True" });
    res.render(`${page}`, {
        teamProduct
    });
}
exports.mainPage = mainPage;
async function comprar(req, res) {
    res.render("comprar");
}
exports.comprar = comprar;
async function createData(req, res) {
    const { name, price, team, liga, year, top, imagePath, imagePath2, imagePath3 } = req.body;
    const newData = {
        name,
        price,
        team,
        liga,
        year,
        top,
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
    const teamProduct = await Data_1.default.find({ "team": `${equipo}` });
    const ligaConcreta = await Data_1.default.find({ "ligue": `${liga}` });
    res.render(`teams/cards`, {
        ligaConcreta,
        teamProduct
    });
}
exports.productCards = productCards;
async function productLink(req, res) {
    const { id } = req.params;
    const product = await Data_1.default.findById(id);
    res.render('teams/product', { product });
}
exports.productLink = productLink;
