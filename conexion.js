
const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10, // Número máximo de conexiones en el pool
  host: 'localhost',
  user: 'root',
  password: '17JEfj18042001',
  database: 'hospital',
  port: 3305, // Ajusta el puerto según tu configuración
});

// Función para insertar datos
const insertData = async (tableName, fields, values) => {
  try {
    const query = `INSERT INTO ${tableName} (${fields.join(',')}) VALUES (${Array(fields.length).fill('?').join(',')})`;

    const promisePool = pool.promise(); // Crea un pool de promesas desde el pool de conexiones

    const [results, fieldsInfo] = await promisePool.query(query, values);

    console.log('Datos insertados correctamente:', results);
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
};


module.exports = insertData;
