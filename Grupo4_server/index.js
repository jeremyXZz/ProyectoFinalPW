import express from "express"
import cors from "cors"
import { sequelize } from "./database/database.js"
import { Cita } from "./models/Cita.js"
import { Estudiante } from "./models/Estudiante.js"

const app = express()
const port = process.env.PORT || 3001
app.use(cors())

async function conexionBD() {
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: true})
    } catch (error) {
        console.log("Problema de conexion", error)
    }
}

app.get("/listar-citas/:codigo", async function(req, res) {
    const citas = await Cita.findAll( {where: {
        codigo: req.params.codigo
    }})
    res.send(citas)
})

app.get("/eliminar-citas/:codigo", async function(req, res) {
    await Cita.destroy({
        where: {
            codigo: req.params.codigo
        }
    })
    res.send("Cita eliminada")
})

app.get("/guardar-cita/:fecha/:inicio/:fin/:url", async function(req, res) {
    let fec = req.params.fecha;
    let ini = req.params.inicio;
    let fin = req.params.fin;
    let url = req.params.url;

    await Cita.create({
        fecha: fec,
        inicio: ini,
        Fin: fin,
        Url: url
    })
    res.send("Cita creada satisfactoriamente")
})

app.get("/guardar-estudiante/:correo/:password/:nombre/:apellido/:tipodni/:dni/:rol", async function(req, res) {
    let cor = req.params.correo;
    let pass = req.params.password;
    let nom = req.params.nombre;
    let apel = req.params.apellido;
    let tip = req.params.tipodni;
    let dni = req.params.dni;
    let rol = req.params.rol;

    await Estudiante.create({
        correo: cor,
        password: pass,
        nombre: nom,
        apellido: apel,
        tipodni: tip,
        Dni: dni,
        Rol: rol,
    })
    res.send("Estudiante creado satisfactoriamente")
})

app.get("/", function(req, res) {
    res.send("Si hay conexion al servidor");
})

app.listen(port, function() {
    console.log("El servidor se encuentra activo: " + port)
    conexionBD()
})