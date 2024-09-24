const { Client } = require('pg');

async function getConection() {
  const client = new Client({
    host: 'localhost',
    port: 5050,
    user: 'postgres',
    password: '123456',
    database: 'MyStore',
  });
  await client.connect();
  return client;
}

module.export = getConection;
