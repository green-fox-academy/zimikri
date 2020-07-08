# Node.js and MySQL

Purpose of this module is to introduce students to working with databases server
side.

## Prerequisites

- Knowing SQL basics
- Implementing REST endpoints

## Materials

| Material                                                                                               |     Time |
| :----------------------------------------------------------------------------------------------------- | -------: |
| [How to Connect to MySQL Database from Node.Js][1]                                                     |    13:33 |
| [Using node mysql JavaScript client][2] (you can ignore the grunt part and advanced use is not needed) | 29.9 min |

## Docs for today's library

<https://github.com/mysqljs/mysql>

## Material review

- MySQL server
- Connection
  - Required fields
- Executing queries
- Sync or async?

### Package features: `mysql`

- `.createConnection`
- `.connect`
- `.end`
- `.query`

## Workshop

### Connect to database

```javascript
let mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'jaj',
  password: 'alma',
  database: 'myDBname',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
  conn.end();
});
```

### Querying a database

```javascript
conn.query('SELECT * FROM table_name;', (err, rows) => {
  console.log('Data received from Db:\n');
  console.log(rows);
});
```

### Error handling

```javascript
conn.query('SELECT * FROM table_name;', (err, rows) => {
  if (err) {
    console.error(`Cannot retrieve data: ${err.toString()}`);
    return null;
  }

  console.log('Data received from Db:\n');
  console.log(rows);
  return rows;
});
```

### MySQL and Express

```javascript
const app = express();

app.get('/', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.send(rows);
  });
});
```

## Exercises

- [Bookstore endpoints](bookstore/README.md)
- [Import user data](import/README.md)

[1]: https://www.youtube.com/watch?v=XuLRKMqozwA
[2]: https://www.sitepoint.com/using-node-mysql-javascript-client/
