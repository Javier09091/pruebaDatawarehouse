
const insertData = require('./conexion.js');

const ciudades = [
  {
    cityId: "C1",
    name: "Cuernavaca",
    population: 365168,
    stateId: "E1"
  },
  {
    cityId: "C2",
    name: "Cuautla",
    population: 154358,
    stateId: "E1"
  },
  {
    cityId: "C3",
    name: "Jiutepec",
    population: 158027,
    stateId: "E1"
  },
  {
    cityId: "C4",
    name: "Guadalajara",
    population: 1461471,
    stateId: "E2"
  },
  {
    cityId: "C5",
    name: "Zapopan",
    population: 1238210,
    stateId: "E2"
  },
  {
    cityId: "C6",
    name: "Tlaquepaque",
    population: 1122874,
    stateId: "E2"
  },
  {
    cityId: "C7",
    name: "San Nicolás de los Garza",
    population: 443273,
    stateId: "E3"
  },
  {
    cityId: "C8",
    name: "Monterrey",
    population: 1434635,
    stateId: "E3"
  },
  {
    cityId: "C9",
    name: "Santa Catarina",
    population: 574297,
    stateId: "E3"
  },
  {
    cityId: "C10",
    name: "Celaya",
    population: 494304,
    stateId: "E4"
  },
  {
    cityId: "C11",
    name: "Apaseo el grande",
    population: 424755,
    stateId: "E4"
  },
  {
    cityId: "C12",
    name: "Comonfort",
    population: 919791,
    stateId: "E4"
  },
  {
    cityId: "C13",
    name: "Orizaba",
    population: 575942,
    stateId: "E5"
  },
  {
    cityId: "C14",
    name: "Cordoba",
    population: 490694,
    stateId: "E5"
  },
  {
    cityId: "C15",
    name: "Coatzacoalcos",
    population: 151971,
    stateId: "E5"
  },
];

const fields = ["idCiudad","nombre","poblacion","Estado_idEstado"];

for (let index = 0; index < ciudades.length; index++) {
  insertData("ciudad",fields, Object.values(ciudades[index]));

  console.log(Object.values(ciudades[index]))
  // console.log( estados.map( estado => Object.values(estado)))
}

