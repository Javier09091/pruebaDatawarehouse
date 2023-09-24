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
// import { detallesFactura } from "./facturaDetalle.js";

document.addEventListener("DOMContentLoaded", () => {
  //idFactura	idConcepto	Cantidad	Precio unitario	Subtotal concepto	IVA	Total concepto	idDoctor
  let detalleFacturaCounter = 1; // Contador global para el idDetalleFactura
  const detallesFactura = [];

  function generateInvoiceDetails(
    idConcepto,
    cantidad,
    pu,
    subtotal,
    IVA = 0.1,
    total,
    idFactura,
    idDoctor
  ) {
    let tabla = document
      .getElementById("details_invoice_table")
      .getElementsByTagName("tbody")[0]; // Selecciona el cuerpo de la tabla
    let fila = tabla.insertRow(tabla.rows.length); // Inserta una nueva fila al final del tbody

    // Genera el idDetalleFactura único para cada detalle
    const idDetalleFactura = `DF${detalleFacturaCounter}`;
    detalleFacturaCounter++; // Incrementa el contador

    // Definir un array con los valores que deseas agregar a la fila
    const valores = [
      idDetalleFactura,
      cantidad,
      pu,
      subtotal,
      IVA,
      total, 
      idConcepto,
      idFactura,
      idDoctor,
    ];

    const facturaDetalle = {
      idDetalleFactura,
      cantidad,
      pu,
      subtotal,
      IVA,
      total, 
      idConcepto,
      idFactura,
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
    textarea.textContent = JSON.stringify(detallesFactura)+"\n";




  }

  const fila = document.getElementById("generate-button");

  fila.addEventListener("click", () => {
    let totalDetalles = 0; // Contador para el total de detalles generados

    for (let currentIdFactura = 1; currentIdFactura <= 400; currentIdFactura++) {
      const idFactura = `F${currentIdFactura}`;

      // Generar al menos un detalle para cada factura
      const nDetalles = totalDetalles < 800 - currentIdFactura + 1 ? getRandomInt(1, 5) : 1;

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
          idConcepto,
          cantidad,
          pu,
          subtotal,
          IVA,
          total,
          idFactura,
          idDoctor
        );

        totalDetalles++; // Incrementa el contador de detalles generados

        if (totalDetalles >= 800) {
          break; // Se alcanzó el total de detalles deseado, salir del bucle
        }
      }

      if (totalDetalles >= 800) {
        break; // Se alcanzó el total de detalles deseado, salir del bucle
      }
    }
  });


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

});

