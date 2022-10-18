const mysql = require("mysql");
const { createConnection } = require("net");
const { compileFunction } = require("vm");

const mysql = require.createConnection({
  host: "localhost",
  user: "x",
  password: "x",
  database: "x",
});

createConnection.connect((err) => {
  if (err) throw err;
  console.log("Conexion establecida");
});

connection.end();
