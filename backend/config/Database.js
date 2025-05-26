const sqlserver = require('mssql');
require('dotenv').config();


const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
    options: {
        encrypt: false,
        enableArithAbort: true,
        trustServerCertificate: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },

};

const Connect = async(req, res) =>{
    try{
            const pool = await sqlserver.connect(config);
            return pool;
    }catch(err){
        throw err;
    }
};

module.exports = Connect;