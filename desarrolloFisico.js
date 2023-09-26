
const insertData = require("./conexion.js");

let desarrollo_Fisico = [
  {
    idEtapaVida: "EV1",
    nombre: "Infancia",
    limiteInf: 0,
    limiteSup: 6,
  },
  {
    idEtapaVida: "EV2",
    nombre: "Niñez",
    limiteInf: 6,
    limiteSup: 12,
  },
  {
    idEtapaVida: "EV3",
    nombre: "Adolescencia",
    limiteInf: 12,
    limiteSup: 20,
  },
  {
    idEtapaVida: "EV4",
    nombre: "Juventud",
    limiteInf: 20,
    limiteSup: 25,
  },
  {
    idEtapaVida: "EV5",
    nombre: "Adultez",
    limiteInf: 25,
    limiteSup: 60
  },
  {
    idEtapaVida: "EV6",
    nombre: "Vejez",
    limiteInf: 60,
    limiteSup: 99
  }

];


const fields = ["idEtapaVida", "nombre", "edadLimInf", "edadLimSup"];

for (let index = 0; index < desarrollo_Fisico.length; index++) {
  insertData("desarrollofisico", fields, Object.values(desarrollo_Fisico[index]));

  console.log(Object.values(desarrollo_Fisico[index]))
  // console.log( estados.map( estado => Object.values(estado)))
}

