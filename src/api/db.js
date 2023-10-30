import pkg from 'pg';

const { Pool } = pkg;
const pool = new Pool({
    user: "admin",
    host: "dpg-ckvhgcjamefc738fipfg-a.oregon-postgres.render.com",
    database: "ashesi_cv_builder_db",
    password: "XSRqgGcKvKpwvMcsBzTpgLbrColAXEXj",
    port: 5432,
    ssl: true
});

export default pool;