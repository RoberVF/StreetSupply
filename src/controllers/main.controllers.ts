import {Request, Response} from 'express'
import Data from '../models/Data'
import fs from 'fs-extra'
import path from 'path'

export async function mainPage(req:Request, res:Response, page:string){
    const teamProduct= await Data.find({"top": "True"})
    res.render(`${page}`, {
        teamProduct
    })
}

export async function comprar(req:Request, res:Response){
    res.render("comprar")
}

export async function createData(req:Request, res:Response){
    const {name, price, team, liga, year, top, imagePath, imagePath2, imagePath3} = req.body
    
    const newData= {
        name,
        price,
        team,
        liga,
        year,
        top,
        imagePath,
        imagePath2,
        imagePath3
    }
    const data= new Data(newData)
    await data.save()

    return res.json({
        message: "Dato guardado correctamente",
        data
    })
}

export async function getData(req:Request, res:Response): Promise<Response>{
    const datas= await Data.find()
    return res.json(datas)
}

export async function incluirDatos(req:Request, res:Response){
    res.render("pages/incluirDatos")
}

export async function verDatos(req:Request, res:Response){
    const todos= await Data.find()
    res.render("pages/verDatos", {
        todos
    })
}

export async function productCards(req:Request, res:Response, equipo:string, liga:string){
    const teamProduct= await Data.find({"team": `${equipo}`})
    const ligaConcreta= await Data.find({"ligue": `${liga}`})

    res.render(`teams/cards`, {
        ligaConcreta,
        teamProduct
    })
}

export async function productLink(req:Request, res:Response){
    const { id }= req.params
    const product= await Data.findById(id)
    res.render('teams/product', { product })
}