import {Router, Request, Response} from 'express'
const router= Router()
import {mainPage, getData, createData, incluirDatos, verDatos, productCards, productLink} from '../controllers/main.controllers'

router.route('/').get((req, res) => mainPage(req, res, "index"))
router.route('/mobile').get((req, res) => mainPage(req, res, "mobile"))

router.route('/mostrarDatos').post(createData).get(getData)

router.route('/incluir').get(incluirDatos)

router.route('/verDatos').get(verDatos)



//Lista equipos
const equipos= [
    "PSG", "Lyon", 
]


//productCards
for(let i of equipos){
    router.route(`/${i.toString()}`).get((req, res) => productCards(req, res, i.toString(), "ligue 1"))
}

//productLink
for(let i of equipos){
    router.route(`/${i.toString()}/:id`).get(productLink)
}


module.exports= router