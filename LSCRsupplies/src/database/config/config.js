module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "lscrdb",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql",
    define : {
    underscored: true,
    paranoid: true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
