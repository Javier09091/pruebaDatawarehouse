// const insertData = require("./conexion.js");

const hospitales = [
  {
    idHospital: "H1",
    nombre: "Hospital General Cuernavaca",
    tipo: "Medicina General",
    cityId: "C1"
  },
  {
    idHospital: "H2",
    nombre: "Hospital Cardiológico Cuernavaca",
    tipo: "Cardiología",
    cityId: "C1"
  },
  {
    idHospital: "H3",
    nombre: "Hospital General Cuautla",
    tipo: "Medicina General",
    cityId: "C2"
  },
  {
    idHospital: "H4",
    nombre: "Clínica Ginecológica Cuautla",
    tipo: "Ginecología",
    cityId: "C2"
  },
  {
    idHospital: "H5",
    nombre: "Hospital General Jiutepec",
    tipo: "Medicina General",
    cityId: "C3"
  },
  {
    idHospital: "H6",
    nombre: "Clínica Oftalmológica Jiutepec",
    tipo: "Oftalmología",
    cityId: "C3"
  },
  {
    idHospital: "H7",
    nombre: "Hospital General Guadalajara",
    tipo: "Medicina General",
    cityId: "C4"
  },
  {
    idHospital: "H8",
    nombre: "Hospital Cardiológico Guadalajara",
    tipo: "Cardiología",
    cityId: "C4"
  },
  {
    idHospital: "H9",
    nombre: "Hospital General Zapopan",
    tipo: "Medicina General",
    cityId: "C5"
  },
  {
    idHospital: "H10",
    nombre: "Hospital Pediátrico Zapopan",
    tipo: "Pediatría",
    cityId: "C5"
  },
  {
    idHospital: "H11",
    nombre: "Hospital General Tlaquepaque",
    tipo: "Medicina General",
    cityId: "C6"
  },
  {
    idHospital: "H12",
    nombre: "Clínica Ortopédica Tlaquepaque",
    tipo: "Ortopedia",
    cityId: "C6"
  },
  {
    idHospital: "H13",
    nombre: "Hospital General San Nicolás",
    tipo: "Medicina General",
    cityId: "C7"
  },
  {
    idHospital: "H14",
    nombre: "Hospital Psiquiátrico San Nicolás",
    tipo: "Psiquiatría",
    cityId: "C7"
  },
  {
    idHospital: "H15",
    nombre: "Hospital General Monterrey",
    tipo: "Medicina General",
    cityId: "C8"
  },
  {
    idHospital: "H16",
    nombre: "Clínica Dermatológica Monterrey",
    tipo: "Dermatología",
    cityId: "C8"
  },
  {
    idHospital: "H17",
    nombre: "Hospital General Santa Catarina",
    tipo: "Medicina General",
    cityId: "C9"
  },
  {
    idHospital: "H18",
    nombre: "Clínica Oftalmológica Santa Catarina",
    tipo: "Oftalmología",
    cityId: "C9"
  },
  {
    idHospital: "H19",
    nombre: "Hospital General Celaya",
    tipo: "Medicina General",
    cityId: "C10"
  },
  {
    idHospital: "H20",
    nombre: "Hospital Cardiológico Celaya",
    tipo: "Cardiología",
    cityId: "C10"
  },
  {
    idHospital: "H21",
    nombre: "Hospital General Apaseo el Grande",
    tipo: "Medicina General",
    cityId: "C11"
  },
  {
    idHospital: "H22",
    nombre: "Clínica Ortopédica Apaseo el Grande",
    tipo: "Ortopedia",
    cityId: "C11"
  },
  {
    idHospital: "H23",
    nombre: "Hospital General Comonfort",
    tipo: "Medicina General",
    cityId: "C12"
  },
  {
    idHospital: "H24",
    nombre: "Hospital Psiquiátrico Comonfort",
    tipo: "Psiquiatría",
    cityId: "C12"
  },
  {
    idHospital: "H25",
    nombre: "Hospital General Orizaba",
    tipo: "Medicina General",
    cityId: "C13"
  },
  {
    idHospital: "H26",
    nombre: "Clínica Oftalmológica Orizaba",
    tipo: "Oftalmología",
    cityId: "C13"
  },
  {
    idHospital: "H27",
    nombre: "Hospital General Cordoba",
    tipo: "Medicina General",
    cityId: "C14"
  },
  {
    idHospital: "H28",
    nombre: "Hospital Pediátrico Cordoba",
    tipo: "Pediatría",
    cityId: "C14"
  },
  {
    idHospital: "H29",
    nombre: "Hospital General Coatzacoalcos",
    tipo: "Medicina General",
    cityId: "C15"
  },
  {
    idHospital: "H30",
    nombre: "Clínica Dermatológica Coatzacoalcos",
    tipo: "Dermatología",
    cityId: "C15"
  }
];



// const fields = ["idHospital","nombre","tipo","Ciudad_idCiudad"];

// for (let index = 0; index < hospitales.length; index++) {
//   insertData("hospital",fields, Object.values(hospitales[index]));

//   console.log(Object.values(hospitales[index]))
//   // console.log( estados.map( estado => Object.values(estado)))
// }

