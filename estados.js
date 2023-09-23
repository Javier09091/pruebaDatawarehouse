
const insertData = require('./conexion.js');

const estados = [
  {
    id: "E1",
    name: "Morelos"
  },
  {
    id: "E2",
    name: "Jalisco"
  },
  {
    id: "E3",
    name: "Nuevo León"
  },
  {
    id: "E4",
    name: "Guanajuato"
  },
  {
    id: "E5",
    name: "Veracruz"
  },
  
];

const fields = ["idEstado","nombre"];

for (let index = 0; index < estados.length; index++) {
  insertData("estado",fields, Object.values(estados[index]));

  console.log(Object.values(estados[index]))
  // console.log( estados.map( estado => Object.values(estado)))
}

