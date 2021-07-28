const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('src/infra/database.db');

//==== Sem Álcool
const BEBIDAS_SEM_ALCOOL_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Bebidas_sem_Álcool" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "VALOR" DECIMAL(3,2)
  );`;

const ADD_BEBIDAS_SEM_ALCOOL_DATA = `
INSERT INTO Bebidas_sem_Álcool (NOME, VALOR)
VALUES 
    ('Coca-Cola', 7.00),
    ('Guaraná', 7.00)
`

function criaTabelaBsa() {
    db.run(BEBIDAS_SEM_ALCOOL_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de bebidas sem álcool");
    });
}


function populaTabelaBsa() {
    db.run(ADD_BEBIDAS_SEM_ALCOOL_DATA, (error)=> {
       if (error) console.log(error);
    });
}


//==== Com Álcool
const BEBIDAS_COM_ALCOOL_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Bebidas_com_Álcool" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "NOME" varchar(64),
    "TEOR_ALCOOLICO" DECIMAL(3,2),
    "VALOR" DECIMAL(3,2)
);`;

const ADD_BEBIDAS_COM_ALCOOL_DATA = `INSERT INTO Bebidas_com_Álcool (NOME, TEOR_ALCOOLICO, VALOR) VALUES 
       ('Vodka', 12.50, 15.00),
       ('Whiskey', 20.00, 19.50)
`

function criaTabelaBca() {
    db.run(BEBIDAS_COM_ALCOOL_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Bebidas com Álcool");
    });
}


function populaTabelaBca() {
    db.run(ADD_BEBIDAS_COM_ALCOOL_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de bebidas com álcool");
    });
}

db.serialize( ()=> {
    criaTabelaBsa();
    populaTabelaBsa();
    criaTabelaBca();
    populaTabelaBca();
});