const sql = require("mssql");
const logger = require("../utils/logger.js");

//.env dosyasından veritabanı bağlantı bilgilerini çekiyoruz
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  //bağlantı seçeneklerini ayarlıyoruz
  options: {
    encrpyt: true,
    trustServerCertificate: true, //development için sertifika bağlantılarını devre dışı bırakıyoruz
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
    connectionTimeout: 30000,
  },
};
