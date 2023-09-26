
const insertData = require('./conexion.js');

const doctores = [
  {
    idDoctor: "D1",
    nombre: "Dr. Juan Pérez",
    sueldo: 75000,
    especialidad: "Medicina General",
    idHospital: "H1"
  },
  {
    idDoctor: "D2",
    nombre: "Dra. María Rodríguez",
    sueldo: 85000,
    especialidad: "Cardiología",
    idHospital: "H1"
  },
  {
    idDoctor: "D3",
    nombre: "Dr. José González",
    sueldo: 70000,
    especialidad: "Pediatría",
    idHospital: "H1"
  },
  {
    idDoctor: "D4",
    nombre: "Dra. Laura Martínez",
    sueldo: 82000,
    especialidad: "Ginecología",
    idHospital: "H2"
  },
  {
    idDoctor: "D5",
    nombre: "Dr. Carlos Sánchez",
    sueldo: 89000,
    especialidad: "Oftalmología",
    idHospital: "H2"
  },
  {
    idDoctor: "D6",
    nombre: "Dra. Ana López",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H2"
  },
  {
    idDoctor: "D7",
    nombre: "Dr. Roberto Fernández",
    sueldo: 78000,
    especialidad: "Cardiología",
    idHospital: "H3"
  },
  {
    idDoctor: "D8",
    nombre: "Dra. Andrea Morales",
    sueldo: 85000,
    especialidad: "Pediatría",
    idHospital: "H3"
  },
  {
    idDoctor: "D9",
    nombre: "Dr. Manuel Pérez",
    sueldo: 70000,
    especialidad: "Ginecología",
    idHospital: "H3"
  },
  {
    idDoctor: "D10",
    nombre: "Dra. Sofía Rodríguez",
    sueldo: 79000,
    especialidad: "Oftalmología",
    idHospital: "H4"
  },
  {
    idDoctor: "D11",
    nombre: "Dr. Jorge González",
    sueldo: 73000,
    especialidad: "Medicina General",
    idHospital: "H4"
  },
  {
    idDoctor: "D12",
    nombre: "Dra. María Martínez",
    sueldo: 88000,
    especialidad: "Cardiología",
    idHospital: "H4"
  },
  {
    idDoctor: "D13",
    nombre: "Dr. Luis Sánchez",
    sueldo: 76000,
    especialidad: "Pediatría",
    idHospital: "H5"
  },
  {
    idDoctor: "D14",
    nombre: "Dra. Isabel López",
    sueldo: 81000,
    especialidad: "Ginecología",
    idHospital: "H5"
  },
  {
    idDoctor: "D15",
    nombre: "Dr. Carlos Fernández",
    sueldo: 84000,
    especialidad: "Oftalmología",
    idHospital: "H5"
  },
  {
    idDoctor: "D16",
    nombre: "Dra. Ana Pérez",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H6"
  },
  {
    idDoctor: "D17",
    nombre: "Dr. Roberto Sánchez",
    sueldo: 89000,
    especialidad: "Cardiología",
    idHospital: "H6"
  },
  {
    idDoctor: "D18",
    nombre: "Dra. Andrea González",
    sueldo: 77000,
    especialidad: "Pediatría",
    idHospital: "H6"
  },
  {
    idDoctor: "D19",
    nombre: "Dr. Manuel Martínez",
    sueldo: 79000,
    especialidad: "Ginecología",
    idHospital: "H7"
  },
  {
    idDoctor: "D20",
    nombre: "Dra. Sofía Sánchez",
    sueldo: 86000,
    especialidad: "Oftalmología",
    idHospital: "H7"
  },
  {
    idDoctor: "D21",
    nombre: "Dr. Jorge Pérez",
    sueldo: 71000,
    especialidad: "Medicina General",
    idHospital: "H7"
  },
  {
    idDoctor: "D22",
    nombre: "Dra. María Sánchez",
    sueldo: 90000,
    especialidad: "Cardiología",
    idHospital: "H8"
  },
  {
    idDoctor: "D23",
    nombre: "Dr. Luis González",
    sueldo: 74000,
    especialidad: "Pediatría",
    idHospital: "H8"
  },
  {
    idDoctor: "D24",
    nombre: "Dra. Isabel Martínez",
    sueldo: 80000,
    especialidad: "Ginecología",
    idHospital: "H8"
  },
  {
    idDoctor: "D25",
    nombre: "Dr. Carlos Pérez",
    sueldo: 83000,
    especialidad: "Oftalmología",
    idHospital: "H9"
  },
  {
    idDoctor: "D26",
    nombre: "Dra. Ana González",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H9"
  },
  {
    idDoctor: "D27",
    nombre: "Dr. Roberto Martínez",
    sueldo: 86000,
    especialidad: "Cardiología",
    idHospital: "H9"
  },
  {
    idDoctor: "D28",
    nombre: "Dra. Andrea Pérez",
    sueldo: 75000,
    especialidad: "Pediatría",
    idHospital: "H10"
  },
  {
    idDoctor: "D29",
    nombre: "Dr. Manuel Sánchez",
    sueldo: 79000,
    especialidad: "Ginecología",
    idHospital: "H10"
  },
  {
    idDoctor: "D30",
    nombre: "Dra. Sofía González",
    sueldo: 88000,
    especialidad: "Oftalmología",
    idHospital: "H10"
  },
  {
    idDoctor: "D31",
    nombre: "Dr. Jorge Sánchez",
    sueldo: 73000,
    especialidad: "Medicina General",
    idHospital: "H11"
  },
  {
    idDoctor: "D32",
    nombre: "Dra. María González",
    sueldo: 90000,
    especialidad: "Cardiología",
    idHospital: "H11"
  },
  {
    idDoctor: "D33",
    nombre: "Dr. Luis Pérez",
    sueldo: 77000,
    especialidad: "Pediatría",
    idHospital: "H11"
  },
  {
    idDoctor: "D34",
    nombre: "Dra. Isabel Sánchez",
    sueldo: 81000,
    especialidad: "Ginecología",
    idHospital: "H12"
  },
  {
    idDoctor: "D35",
    nombre: "Dr. Carlos González",
    sueldo: 86000,
    especialidad: "Oftalmología",
    idHospital: "H12"
  },
  {
    idDoctor: "D36",
    nombre: "Dra. Ana Sánchez",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H12"
  },
  {
    idDoctor: "D37",
    nombre: "Dr. Roberto Martínez",
    sueldo: 75000,
    especialidad: "Cardiología",
    idHospital: "H13"
  },
  {
    idDoctor: "D38",
    nombre: "Dra. Andrea Pérez",
    sueldo: 79000,
    especialidad: "Pediatría",
    idHospital: "H13"
  },
  {
    idDoctor: "D39",
    nombre: "Dr. Manuel Sánchez",
    sueldo: 90000,
    especialidad: "Ginecología",
    idHospital: "H13"
  },
  {
    idDoctor: "D40",
    nombre: "Dra. Sofía González",
    sueldo: 72000,
    especialidad: "Oftalmología",
    idHospital: "H14"
  },
  {
    idDoctor: "D41",
    nombre: "Dr. Juan Pérez",
    sueldo: 75000,
    especialidad: "Medicina General",
    idHospital: "H14"
  },
  {
    idDoctor: "D42",
    nombre: "Dra. María Rodríguez",
    sueldo: 85000,
    especialidad: "Cardiología",
    idHospital: "H14"
  },
  {
    idDoctor: "D43",
    nombre: "Dr. Luis Rodríguez",
    sueldo: 75000,
    especialidad: "Medicina General",
    idHospital: "H15"
  },
  {
    idDoctor: "D44",
    nombre: "Dra. Ana Martínez",
    sueldo: 85000,
    especialidad: "Cardiología",
    idHospital: "H15"
  },
  {
    idDoctor: "D45",
    nombre: "Dr. Juan González",
    sueldo: 70000,
    especialidad: "Pediatría",
    idHospital: "H15"
  },
  // Continúa con "H16"
  {
    idDoctor: "D46",
    nombre: "Dra. Laura Pérez",
    sueldo: 82000,
    especialidad: "Ginecología",
    idHospital: "H16"
  },
  {
    idDoctor: "D47",
    nombre: "Dr. Carlos López",
    sueldo: 89000,
    especialidad: "Oftalmología",
    idHospital: "H16"
  },
  {
    idDoctor: "D48",
    nombre: "Dra. María Sánchez",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H16"
  }, {
    idDoctor: "D49",
    nombre: "Dr. Roberto López",
    sueldo: 78000,
    especialidad: "Cardiología",
    idHospital: "H17"
  },
  {
    idDoctor: "D50",
    nombre: "Dra. Andrea Martínez",
    sueldo: 85000,
    especialidad: "Pediatría",
    idHospital: "H17"
  },
  {
    idDoctor: "D51",
    nombre: "Dr. Manuel González",
    sueldo: 70000,
    especialidad: "Ginecología",
    idHospital: "H17"
  },
  // Continúa con "H18"
  {
    idDoctor: "D52",
    nombre: "Dra. Sofía Pérez",
    sueldo: 79000,
    especialidad: "Oftalmología",
    idHospital: "H18"
  },
  {
    idDoctor: "D53",
    nombre: "Dr. Jorge Sánchez",
    sueldo: 73000,
    especialidad: "Medicina General",
    idHospital: "H18"
  },
  {
    idDoctor: "D54",
    nombre: "Dra. María López",
    sueldo: 88000,
    especialidad: "Cardiología",
    idHospital: "H18"
  }, {
    idDoctor: "D55",
    nombre: "Dr. Juan González",
    sueldo: 71000,
    especialidad: "Medicina General",
    idHospital: "H19"
  },
  {
    idDoctor: "D56",
    nombre: "Dra. María Sánchez",
    sueldo: 90000,
    especialidad: "Cardiología",
    idHospital: "H19"
  },
  {
    idDoctor: "D57",
    nombre: "Dr. Luis Martínez",
    sueldo: 74000,
    especialidad: "Pediatría",
    idHospital: "H19"
  },
  // Continúa con "H20"
  {
    idDoctor: "D58",
    nombre: "Dra. Isabel Pérez",
    sueldo: 80000,
    especialidad: "Ginecología",
    idHospital: "H20"
  },
  {
    idDoctor: "D59",
    nombre: "Dr. Carlos Sánchez",
    sueldo: 83000,
    especialidad: "Oftalmología",
    idHospital: "H20"
  },
  {
    idDoctor: "D60",
    nombre: "Dra. Ana Martínez",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H20"
  },// Hospital H21
  {
    idDoctor: "D61",
    nombre: "Dr. Jorge Sánchez",
    sueldo: 77000,
    especialidad: "Cardiología",
    idHospital: "H21"
  },
  {
    idDoctor: "D62",
    nombre: "Dra. María González",
    sueldo: 90000,
    especialidad: "Pediatría",
    idHospital: "H21"
  },
  {
    idDoctor: "D63",
    nombre: "Dr. Luis Pérez",
    sueldo: 77000,
    especialidad: "Ginecología",
    idHospital: "H21"
  },
  // Hospital H22
  {
    idDoctor: "D64",
    nombre: "Dra. Isabel Sánchez",
    sueldo: 81000,
    especialidad: "Oftalmología",
    idHospital: "H22"
  },
  {
    idDoctor: "D65",
    nombre: "Dr. Carlos González",
    sueldo: 86000,
    especialidad: "Medicina General",
    idHospital: "H22"
  },
  {
    idDoctor: "D66",
    nombre: "Dra. Ana Sánchez",
    sueldo: 72000,
    especialidad: "Cardiología",
    idHospital: "H22"
  }, // Hospital H23
  {
    idDoctor: "D67",
    nombre: "Dr. Roberto Martínez",
    sueldo: 75000,
    especialidad: "Pediatría",
    idHospital: "H23"
  },
  {
    idDoctor: "D68",
    nombre: "Dra. Andrea Pérez",
    sueldo: 79000,
    especialidad: "Ginecología",
    idHospital: "H23"
  },
  {
    idDoctor: "D69",
    nombre: "Dr. Manuel Sánchez",
    sueldo: 90000,
    especialidad: "Oftalmología",
    idHospital: "H23"
  }
  , {
    idDoctor: "D70",
    nombre: "Dra. Sofía González",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H24"
  },
  {
    idDoctor: "D71",
    nombre: "Dr. Juan Pérez",
    sueldo: 75000,
    especialidad: "Cardiología",
    idHospital: "H24"
  },
  {
    idDoctor: "D72",
    nombre: "Dra. María Rodríguez",
    sueldo: 85000,
    especialidad: "Pediatría",
    idHospital: "H24"
  }
  ,// Hospital H25
  {
    idDoctor: "D73",
    nombre: "Dr. Carlos Sánchez",
    sueldo: 89000,
    especialidad: "Ginecología",
    idHospital: "H25"
  },
  {
    idDoctor: "D74",
    nombre: "Dra. Ana López",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H25"
  },
  {
    idDoctor: "D75",
    nombre: "Dr. Roberto Fernández",
    sueldo: 78000,
    especialidad: "Cardiología",
    idHospital: "H25"
  }

  , {
    idDoctor: "D76",
    nombre: "Dra. Andrea Morales",
    sueldo: 85000,
    especialidad: "Pediatría",
    idHospital: "H26"
  },
  {
    idDoctor: "D77",
    nombre: "Dr. Manuel Pérez",
    sueldo: 70000,
    especialidad: "Ginecología",
    idHospital: "H26"
  },
  {
    idDoctor: "D78",
    nombre: "Dra. Sofía Rodríguez",
    sueldo: 79000,
    especialidad: "Oftalmología",
    idHospital: "H26"
  }

  , {
    idDoctor: "D79",
    nombre: "Dr. Jorge González",
    sueldo: 73000,
    especialidad: "Medicina General",
    idHospital: "H27"
  },
  {
    idDoctor: "D80",
    nombre: "Dra. María Martínez",
    sueldo: 88000,
    especialidad: "Cardiología",
    idHospital: "H27"
  },
  {
    idDoctor: "D81",
    nombre: "Dr. Luis Sánchez",
    sueldo: 76000,
    especialidad: "Pediatría",
    idHospital: "H27"
  }

  , {
    idDoctor: "D82",
    nombre: "Dra. Isabel López",
    sueldo: 81000,
    especialidad: "Ginecología",
    idHospital: "H28"
  },
  {
    idDoctor: "D83",
    nombre: "Dr. Carlos Fernández",
    sueldo: 84000,
    especialidad: "Oftalmología",
    idHospital: "H28"
  },
  {
    idDoctor: "D84",
    nombre: "Dra. Ana Pérez",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H28"
  }
  ,
  {
    idDoctor: "D85",
    nombre: "Dr. Roberto Sánchez",
    sueldo: 89000,
    especialidad: "Cardiología",
    idHospital: "H29"
  },
  {
    idDoctor: "D86",
    nombre: "Dra. Andrea González",
    sueldo: 77000,
    especialidad: "Pediatría",
    idHospital: "H29"
  },
  {
    idDoctor: "D87",
    nombre: "Dr. Manuel Martínez",
    sueldo: 79000,
    especialidad: "Ginecología",
    idHospital: "H29"
  }
  , {
    idDoctor: "D88",
    nombre: "Dra. Sofía Sánchez",
    sueldo: 86000,
    especialidad: "Oftalmología",
    idHospital: "H30"
  },
  {
    idDoctor: "D89",
    nombre: "Dr. Jorge Pérez",
    sueldo: 71000,
    especialidad: "Medicina General",
    idHospital: "H30"
  },
  {
    idDoctor: "D90",
    nombre: "Dra. María Sánchez",
    sueldo: 90000,
    especialidad: "Cardiología",
    idHospital: "H30"
  }




];


const fields = ["idDoctor", "nombre", "sueld", "especialidad", "Hospital_idHospital"];

for (let index = 0; index < doctores.length; index++) {
  insertData("doctor", fields, Object.values(doctores[index]));

  console.log(Object.values(doctores[index]))
  // console.log( estados.map( estado => Object.values(estado)))
}


// export {doctores};