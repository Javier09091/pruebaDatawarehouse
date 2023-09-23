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
// import { insertData } from "./conexion.js";
import { detallesFactura } from "./facturaDetalle.js";

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

    const facturaDetalle = {
      idFactura,
      idConcepto,
      cantidad,
      pu,
      subtotal,
      IVA,
      total,
      idDoctor,
    };

    // Agregar el objeto al array detalleFactura
    detallesFactura.push(facturaDetalle);

    // Recorrer el array y agregar cada valor a una celda de la fila
    for (let i = 0; i < valores.length; i++) {
      let celda = fila.insertCell(i);
      celda.innerHTML = valores[i];
    }

    const textarea = document.getElementById('textarea');
    textarea.textContent = JSON.stringify(detallesFactura);


    

  }

  const fila = document.getElementById("generate-button");


  fila.addEventListener("click", () => {
    let totalFacturas = 0; // Contador para el total de facturas generadas
    let currentIdFactura = 1; // Inicializa el contador de idFactura en 1

    while (currentIdFactura <= 800) {
      const nDetalles = getRandomInt(1, 5); // Número aleatorio de detalles para esta factura
      const idFactura = "F" + currentIdFactura;

      for (let iterarDetalles = 0; iterarDetalles < nDetalles; iterarDetalles++) {
        const idConcepto =
          conceptos[getRandomInt(1, conceptos.length - 1)].idConcepto;
        const cantidad = getRandomInt(1, 6);
        const pu = generatePU(idConcepto);
        const subtotal = cantidad * pu;
        const IVA = 0.1;
        const total = IVA * subtotal + subtotal;
        const idDoctor = doctores[getRandomInt(1, doctores.length - 1)].idDoctor;

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

      totalFacturas++; // Incrementa el contador de facturas generadas
      currentIdFactura++; // Incrementa el valor de idFactura
    }
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

});

