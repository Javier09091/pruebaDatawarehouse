const insertData = require('./conexion.js');

const conceptos = [
  {
    idConcepto: "C1",
    nombre: "Consulta Médica",
  },
  {
    idConcepto: "C2",
    nombre: "Radiografía de Tórax",
  },
  {
    idConcepto: "C3",
    nombre: "Análisis de Sangre",
  },
  {
    idConcepto: "C4",
    nombre: "Ecografía Abdominal",
  },
  {
    idConcepto: "C5",
    nombre: "Terapia Física",
  },
  {
    idConcepto: "C6",
    nombre: "Tomografía",
  },
  {
    idConcepto: "C7",
    nombre: "Medicamento",
  },
  {
    idConcepto: "C8",
    nombre: "Terapia psicologica",
  },
];

console.log(conceptos.length)

function generatePU(idConcepto) {
  let precioUnitario = 0;
  switch(idConcepto){
    case "C1":  precioUnitario = 1000; break;
    case "C2":  precioUnitario = 505; break;
    case "C3":  precioUnitario = 750; break;
    case "C4":  precioUnitario = 852; break;
    case "C5":  precioUnitario = 580; break;
    case "C6":  precioUnitario = 858; break;
    case "C7":  precioUnitario = 1560; break;
    case "C8":  precioUnitario = 450; break;
  }

  return precioUnitario;
}


const fields = ["idConcepto","nombre"];

for (let index = 0; index < conceptos.length; index++) {
  insertData("concepto",fields, Object.values(conceptos[index]));

  console.log(Object.values(conceptos[index]))
  // console.log( estados.map( estado => Object.values(estado)))
}

// export {generatePU, conceptos};