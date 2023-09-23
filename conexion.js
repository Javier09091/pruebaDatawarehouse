
const mysql = require('mysql');

const connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: '17JEfj18042001',
  database: 'hospital',
  port: 3305,
};

const insertData = async (tableName, fields, values) => {
  const connection = mysql.createConnection(connectionConfig);

  try {
    const query = `INSERT INTO ${tableName} (${fields.join(',')}) VALUES (${Array(fields.length).fill('?').join(',')})`;
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Error al insertar datos:', error);
      } else {
        console.log('Datos insertados correctamente:', results);
      }
      connection.end();
    });
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    connection.end();
  }
};

module.exports = insertData;
