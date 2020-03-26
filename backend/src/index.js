const express=require('express');

const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());

app.use(express.json())
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * GET: Buscar/Listar uma informação do bank-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Boby: Corpo da requisição, utilizado para criar ou alterar recursos
   */
/**
 * SQL: MySql, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
 * NoSql: MongoDB, couchDB, etc 
 */

/**
 * Driver: select * from users
 * Query Builder: table('usres').select('*').where('')
 */



app.listen(3333);
