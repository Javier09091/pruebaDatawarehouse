// insertar un idFactura desde F1.............
// insertar un idConcepto de manera aleatoria de los ya existentes.
// insertar una cantidad de manera aleatoria 1 entre 10
// insertar un precio unitario de acuerdo al Concepto
// insertar subtotal de acuerdo a la cantidad*pu
//insertar IVA (0.10)
// insertar total IVA+subtotal
// insertar un idDoctor de acuerdo al array de objetos doctores

import { generatePU, conceptos } from "./concepto.js";
import { doctores } from "./doctores.js";
import { insertData } from "./conexion.js";

document.addEventListener("DOMContentLoaded", () => {
  //idFactura	idConcepto	Cantidad	Precio unitario	Subtotal concepto	IVA	Total concepto	idDoctor
  function generateInvoiceDetails(
    idFactura,
    idConcepto,
    cantidad,
    pu,
    subtotal,
    IVA = 0.1,
    total,
    idDoctor
  ) {
    let tabla = document
      .getElementById("details_invoice_table")
      .getElementsByTagName("tbody")[0]; // Selecciona el cuerpo de la tabla
    let fila = tabla.insertRow(tabla.rows.length); // Inserta una nueva fila al final del tbody
    console.log(tabla);

    // Definir un array con los valores que deseas agregar a la fila
    const valores = [
      idFactura,
      idConcepto,
      cantidad,
      pu,
      subtotal,
      IVA,
      total,
      idDoctor,
    ];

    // Recorrer el array y agregar cada valor a una celda de la fila
    for (let i = 0; i < valores.length; i++) {
      let celda = fila.insertCell(i);
      celda.innerHTML = valores[i];
    }
  }

  const fila = document.getElementById("generate-button");

  fila.addEventListener("click", () => {
    // insertar un idFactura desde F1.............
    // insertar un idConcepto de manera aleatoria de los ya existentes.
    // insertar una cantidad de manera aleatoria 1 entre 10
    // insertar un precio unitario de acuerdo al Concepto
    // insertar subtotal de acuerdo a la cantidad*pu
    //insertar IVA (0.10)
    // insertar total IVA+subtotal
    // insertar un idDoctor de acuerdo al array de objetos doctores

    let nDetalles = getRandomIntInclusive(1, 5);
    for (let index = 1; index < 800; index++) {
      let idFactura = "F" + index;
      console.log(index);
      for (
        let iterarDetalles = 0;
        iterarDetalles < nDetalles;
        iterarDetalles++
      ) {
        const idConcepto =
          conceptos[getRandomIntInclusive(0, conceptos.length-1)].idConcepto;
        const cantidad = getRandomIntInclusive(1, 6);
        const pu = generatePU(idConcepto);
        const subtotal = cantidad * pu;
        const IVA = 0.1;
        const total = Math.round(IVA * subtotal) + subtotal;
        const idDoctor =
          doctores[getRandomIntInclusive(0, doctores.length-1)].idDoctor;

        generateInvoiceDetails(
          idFactura,
          idConcepto,
          cantidad,
          pu,
          subtotal,
          IVA,
          total,
          idDoctor
        );
      }

    }
  });

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  
});

