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
    idHospital: "H2"
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
    idHospital: "H3"
  },
  {
    idDoctor: "D6",
    nombre: "Dra. Ana López",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H3"
  },
  {
    idDoctor: "D7",
    nombre: "Dr. Roberto Fernández",
    sueldo: 78000,
    especialidad: "Cardiología",
    idHospital: "H4"
  },
  {
    idDoctor: "D8",
    nombre: "Dra. Andrea Morales",
    sueldo: 85000,
    especialidad: "Pediatría",
    idHospital: "H4"
  },
  {
    idDoctor: "D9",
    nombre: "Dr. Manuel Pérez",
    sueldo: 70000,
    especialidad: "Ginecología",
    idHospital: "H5"
  },
  {
    idDoctor: "D10",
    nombre: "Dra. Sofía Rodríguez",
    sueldo: 79000,
    especialidad: "Oftalmología",
    idHospital: "H5"
  },
  {
    idDoctor: "D11",
    nombre: "Dr. Jorge González",
    sueldo: 73000,
    especialidad: "Medicina General",
    idHospital: "H6"
  },
  {
    idDoctor: "D12",
    nombre: "Dra. María Martínez",
    sueldo: 88000,
    especialidad: "Cardiología",
    idHospital: "H6"
  },
  {
    idDoctor: "D13",
    nombre: "Dr. Luis Sánchez",
    sueldo: 76000,
    especialidad: "Pediatría",
    idHospital: "H7"
  },
  {
    idDoctor: "D14",
    nombre: "Dra. Isabel López",
    sueldo: 81000,
    especialidad: "Ginecología",
    idHospital: "H7"
  },
  {
    idDoctor: "D15",
    nombre: "Dr. Carlos Fernández",
    sueldo: 84000,
    especialidad: "Oftalmología",
    idHospital: "H8"
  },
  {
    idDoctor: "D16",
    nombre: "Dra. Ana Pérez",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H8"
  },
  {
    idDoctor: "D17",
    nombre: "Dr. Roberto Sánchez",
    sueldo: 89000,
    especialidad: "Cardiología",
    idHospital: "H9"
  },
  {
    idDoctor: "D18",
    nombre: "Dra. Andrea González",
    sueldo: 77000,
    especialidad: "Pediatría",
    idHospital: "H9"
  },
  {
    idDoctor: "D19",
    nombre: "Dr. Manuel Martínez",
    sueldo: 79000,
    especialidad: "Ginecología",
    idHospital: "H10"
  },
  {
    idDoctor: "D20",
    nombre: "Dra. Sofía Sánchez",
    sueldo: 86000,
    especialidad: "Oftalmología",
    idHospital: "H10"
  },
  {
    idDoctor: "D21",
    nombre: "Dr. Jorge Pérez",
    sueldo: 71000,
    especialidad: "Medicina General",
    idHospital: "H11"
  },
  {
    idDoctor: "D22",
    nombre: "Dra. María Sánchez",
    sueldo: 90000,
    especialidad: "Cardiología",
    idHospital: "H11"
  },
  {
    idDoctor: "D23",
    nombre: "Dr. Luis González",
    sueldo: 74000,
    especialidad: "Pediatría",
    idHospital: "H12"
  },
  {
    idDoctor: "D24",
    nombre: "Dra. Isabel Martínez",
    sueldo: 80000,
    especialidad: "Ginecología",
    idHospital: "H12"
  },
  {
    idDoctor: "D25",
    nombre: "Dr. Carlos Pérez",
    sueldo: 83000,
    especialidad: "Oftalmología",
    idHospital: "H13"
  },
  {
    idDoctor: "D26",
    nombre: "Dra. Ana González",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H13"
  },
  {
    idDoctor: "D27",
    nombre: "Dr. Roberto Martínez",
    sueldo: 86000,
    especialidad: "Cardiología",
    idHospital: "H14"
  },
  {
    idDoctor: "D28",
    nombre: "Dra. Andrea Pérez",
    sueldo: 75000,
    especialidad: "Pediatría",
    idHospital: "H14"
  },
  {
    idDoctor: "D29",
    nombre: "Dr. Manuel Sánchez",
    sueldo: 79000,
    especialidad: "Ginecología",
    idHospital: "H15"
  },
  {
    idDoctor: "D30",
    nombre: "Dra. Sofía González",
    sueldo: 84000,
    especialidad: "Oftalmología",
    idHospital: "H15"
  },
  {
    idDoctor: "D31",
    nombre: "Dr. Jorge Martínez",
    sueldo: 73000,
    especialidad: "Medicina General",
    idHospital: "H16"
  },
  {
    idDoctor: "D32",
    nombre: "Dra. María Pérez",
    sueldo: 90000,
    especialidad: "Cardiología",
    idHospital: "H16"
  },
  {
    idDoctor: "D33",
    nombre: "Dr. Luis Martínez",
    sueldo: 77000,
    especialidad: "Pediatría",
    idHospital: "H17"
  },
  {
    idDoctor: "D34",
    nombre: "Dra. Isabel González",
    sueldo: 81000,
    especialidad: "Ginecología",
    idHospital: "H17"
  },
  {
    idDoctor: "D35",
    nombre: "Dr. Carlos Martínez",
    sueldo: 86000,
    especialidad: "Oftalmología",
    idHospital: "H18"
  },
  {
    idDoctor: "D36",
    nombre: "Dra. Ana Martínez",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H18"
  },
  {
    idDoctor: "D37",
    nombre: "Dr. Roberto Sánchez",
    sueldo: 87000,
    especialidad: "Cardiología",
    idHospital: "H19"
  },
  {
    idDoctor: "D38",
    nombre: "Dra. Andrea Martínez",
    sueldo: 78000,
    especialidad: "Pediatría",
    idHospital: "H19"
  },
  {
    idDoctor: "D39",
    nombre: "Dr. Manuel González",
    sueldo: 75000,
    especialidad: "Ginecología",
    idHospital: "H20"
  },
  {
    idDoctor: "D40",
    nombre: "Dra. Sofía Martínez",
    sueldo: 80000,
    especialidad: "Oftalmología",
    idHospital: "H20"
  },
  {
    idDoctor: "D41",
    nombre: "Dr. Jorge Sánchez",
    sueldo: 71000,
    especialidad: "Medicina General",
    idHospital: "H21"
  },
  {
    idDoctor: "D42",
    nombre: "Dra. María González",
    sueldo: 89000,
    especialidad: "Cardiología",
    idHospital: "H21"
  },
  {
    idDoctor: "D43",
    nombre: "Dr. Luis Pérez",
    sueldo: 74000,
    especialidad: "Pediatría",
    idHospital: "H22"
  },
  {
    idDoctor: "D44",
    nombre: "Dra. Isabel Sánchez",
    sueldo: 83000,
    especialidad: "Ginecología",
    idHospital: "H22"
  },
  {
    idDoctor: "D45",
    nombre: "Dr. Carlos González",
    sueldo: 76000,
    especialidad: "Oftalmología",
    idHospital: "H23"
  },
  {
    idDoctor: "D46",
    nombre: "Dra. Ana Sánchez",
    sueldo: 88000,
    especialidad: "Medicina General",
    idHospital: "H23"
  },
  {
    idDoctor: "D47",
    nombre: "Dr. Roberto González",
    sueldo: 82000,
    especialidad: "Cardiología",
    idHospital: "H24"
  },
  {
    idDoctor: "D48",
    nombre: "Dra. Andrea Sánchez",
    sueldo: 87000,
    especialidad: "Pediatría",
    idHospital: "H24"
  },
  {
    idDoctor: "D49",
    nombre: "Dr. Manuel González",
    sueldo: 78000,
    especialidad: "Ginecología",
    idHospital: "H25"
  },
  {
    idDoctor: "D50",
    nombre: "Dra. Sofía González",
    sueldo: 89000,
    especialidad: "Oftalmología",
    idHospital: "H25"
  },
  {
    idDoctor: "D51",
    nombre: "Dr. Jorge Sánchez",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H26"
  },
  {
    idDoctor: "D52",
    nombre: "Dra. María González",
    sueldo: 86000,
    especialidad: "Cardiología",
    idHospital: "H26"
  },
  {
    idDoctor: "D53",
    nombre: "Dr. Luis Pérez",
    sueldo: 79000,
    especialidad: "Pediatría",
    idHospital: "H27"
  },
  {
    idDoctor: "D54",
    nombre: "Dra. Isabel Sánchez",
    sueldo: 72000,
    especialidad: "Ginecología",
    idHospital: "H27"
  },
  {
    idDoctor: "D55",
    nombre: "Dr. Carlos González",
    sueldo: 90000,
    especialidad: "Oftalmología",
    idHospital: "H28"
  },
  {
    idDoctor: "D56",
    nombre: "Dra. Ana Sánchez",
    sueldo: 77000,
    especialidad: "Medicina General",
    idHospital: "H28"
  },
  {
    idDoctor: "D57",
    nombre: "Dr. Roberto González",
    sueldo: 84000,
    especialidad: "Cardiología",
    idHospital: "H29"
  },
  {
    idDoctor: "D58",
    nombre: "Dra. Andrea Sánchez",
    sueldo: 71000,
    especialidad: "Pediatría",
    idHospital: "H29"
  },
  {
    idDoctor: "D59",
    nombre: "Dr. Manuel González",
    sueldo: 75000,
    especialidad: "Ginecología",
    idHospital: "H30"
  },
  {
    idDoctor: "D60",
    nombre: "Dra. Sofía González",
    sueldo: 88000,
    especialidad: "Oftalmología",
    idHospital: "H30"
  },
  {
    idDoctor: "D61",
    nombre: "Dr. Jorge Sánchez",
    sueldo: 79000,
    especialidad: "Medicina General",
    idHospital: "H31"
  },
  {
    idDoctor: "D62",
    nombre: "Dra. María González",
    sueldo: 77000,
    especialidad: "Cardiología",
    idHospital: "H31"
  },
  {
    idDoctor: "D63",
    nombre: "Dr. Luis Pérez",
    sueldo: 84000,
    especialidad: "Pediatría",
    idHospital: "H32"
  },
  {
    idDoctor: "D64",
    nombre: "Dra. Isabel Sánchez",
    sueldo: 85000,
    especialidad: "Ginecología",
    idHospital: "H32"
  },
  {
    idDoctor: "D65",
    nombre: "Dr. Carlos González",
    sueldo: 76000,
    especialidad: "Oftalmología",
    idHospital: "H33"
  },
  {
    idDoctor: "D66",
    nombre: "Dra. Ana Sánchez",
    sueldo: 71000,
    especialidad: "Medicina General",
    idHospital: "H33"
  },
  {
    idDoctor: "D67",
    nombre: "Dr. Roberto González",
    sueldo: 90000,
    especialidad: "Cardiología",
    idHospital: "H34"
  },
  {
    idDoctor: "D68",
    nombre: "Dra. Andrea Sánchez",
    sueldo: 73000,
    especialidad: "Pediatría",
    idHospital: "H34"
  },
  {
    idDoctor: "D69",
    nombre: "Dr. Manuel González",
    sueldo: 82000,
    especialidad: "Ginecología",
    idHospital: "H35"
  },
  {
    idDoctor: "D70",
    nombre: "Dra. Sofía González",
    sueldo: 87000,
    especialidad: "Oftalmología",
    idHospital: "H35"
  },
  {
    idDoctor: "D71",
    nombre: "Dr. Jorge Sánchez",
    sueldo: 73000,
    especialidad: "Medicina General",
    idHospital: "H36"
  },
  {
    idDoctor: "D72",
    nombre: "Dra. María González",
    sueldo: 80000,
    especialidad: "Cardiología",
    idHospital: "H36"
  },
  {
    idDoctor: "D73",
    nombre: "Dr. Luis Pérez",
    sueldo: 89000,
    especialidad: "Pediatría",
    idHospital: "H37"
  },
  {
    idDoctor: "D74",
    nombre: "Dra. Isabel Sánchez",
    sueldo: 71000,
    especialidad: "Ginecología",
    idHospital: "H37"
  },
  {
    idDoctor: "D75",
    nombre: "Dr. Carlos González",
    sueldo: 86000,
    especialidad: "Oftalmología",
    idHospital: "H38"
  },
  {
    idDoctor: "D76",
    nombre: "Dra. Ana Sánchez",
    sueldo: 74000,
    especialidad: "Medicina General",
    idHospital: "H38"
  },
  {
    idDoctor: "D77",
    nombre: "Dr. Roberto González",
    sueldo: 79000,
    especialidad: "Cardiología",
    idHospital: "H39"
  },
  {
    idDoctor: "D78",
    nombre: "Dra. Andrea Sánchez",
    sueldo: 87000,
    especialidad: "Pediatría",
    idHospital: "H39"
  },
  {
    idDoctor: "D79",
    nombre: "Dr. Manuel González",
    sueldo: 76000,
    especialidad: "Ginecología",
    idHospital: "H40"
  },
  {
    idDoctor: "D80",
    nombre: "Dra. Sofía González",
    sueldo: 88000,
    especialidad: "Oftalmología",
    idHospital: "H40"
  },
  {
    idDoctor: "D81",
    nombre: "Dr. Jorge Sánchez",
    sueldo: 72000,
    especialidad: "Medicina General",
    idHospital: "H41"
  },
  {
    idDoctor: "D82",
    nombre: "Dra. María González",
    sueldo: 90000,
    especialidad: "Cardiología",
    idHospital: "H41"
  },
  {
    idDoctor: "D83",
    nombre: "Dr. Luis Pérez",
    sueldo: 75000,
    especialidad: "Pediatría",
    idHospital: "H42"
  },
  {
    idDoctor: "D84",
    nombre: "Dra. Isabel Sánchez",
    sueldo: 80000,
    especialidad: "Ginecología",
    idHospital: "H42"
  },
  {
    idDoctor: "D85",
    nombre: "Dr. Carlos González",
    sueldo: 88000,
    especialidad: "Oftalmología",
    idHospital: "H43"
  },
  {
    idDoctor: "D86",
    nombre: "Dra. Ana Sánchez",
    sueldo: 77000,
    especialidad: "Medicina General",
    idHospital: "H43"
  },
  {
    idDoctor: "D87",
    nombre: "Dr. Roberto González",
    sueldo: 89000,
    especialidad: "Cardiología",
    idHospital: "H44"
  },
  {
    idDoctor: "D88",
    nombre: "Dra. Andrea Sánchez",
    sueldo: 78000,
    especialidad: "Pediatría",
    idHospital: "H44"
  },
  {
    idDoctor: "D89",
    nombre: "Dr. Manuel González",
    sueldo: 76000,
    especialidad: "Ginecología",
    idHospital: "H45"
  },
  {
    idDoctor: "D90",
    nombre: "Dra. Sofía González",
    sueldo: 87000,
    especialidad: "Oftalmología",
    idHospital: "H45"
  }
];