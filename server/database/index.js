const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0,
});

pool.getConnection((err, conn) => {
    if (err) {
        console.error('Errore durante la connessione al database:', err);
        // Aggiungi qui la logica per gestire l'errore, ad esempio, chiudere l'applicazione o inviare una risposta di errore HTTP
    } else {
        console.log('Connessione riuscita al database MySQL');
        // Puoi eseguire operazioni aggiuntive qui utilizzando la connessione
        // ...
        // Chiudi la connessione quando hai finito di usarla
        conn.release();
    }
});

module.exports = pool.promise();
