import Database from './Database.js';

Database
    .sync()
    .then(() => console.log('Sincronizado com o banco de dados.'))
    .catch(() => console.log('Deu erro'));
    