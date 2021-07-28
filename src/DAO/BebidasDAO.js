class BebidasDAO {
    constructor(db) {
      this.db = db;
    }
    getAllBebidasSA() {
        return new Promise((resolve, reject) => {
          this.db.all("SELECT * FROM Bebidas_Sem_Álcool", (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      }
    
    getAllBebidasCA() {
        return new Promise((resolve, reject) => {
          this.db.all("SELECT * FROM Bebidas_Com_Álcool", (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      }
  
      getBebidaSA(id){
        return new Promise((resolve, reject) => {
          this.db.get("Select * from Bebidas_Sem_Álcool where id = ?", id, (err, rows) => {
            if (err) {
              reject(err);
            } 
            else{
              resolve(rows);
            }
          });
        });
      }
    
     getBebidaCA(id){
        return new Promise((resolve, reject) => {
          this.db.get("Select * from Bebidas_Com_Álcool where id = ?", id, (err, rows) => {
            if (err) {
              reject(err);
            } 
            else{
              resolve(rows);
            }
          });
        });
      }
  
    insertBebidaSA(bebida) {
      return new Promise((resolve, reject) => {
        this.db.run(
          `INSERT INTO Bebidas_sem_Álcool(NOME, VALOR) VALUES (?,?)`,
          Object.values(bebida),
          (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          }
        );
      });
    }

    insertBebidaCA(bebida) {
        return new Promise((resolve, reject) => {
          this.db.run(
            `INSERT INTO Bebidas_com_Álcool(NOME, TEOR_ALCOOLICO, VALOR) VALUES (?,?,?)`,
            Object.values(bebida),
            (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        });
      }
  
    deleteBebidaSA(bebidasId) {
      return new Promise((resolve, reject) => {
        this.db.run(`delete from Bebidas_sem_Álcool where id = ?`, bebidasId, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }

    deleteBebidaCA(bebidasId) {
        return new Promise((resolve, reject) => {
          this.db.run(`delete from Bebidas_com_Álcool where id = ?`, bebidasId, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
  
    updateBebidasSA(ID, NOME, VALOR) {
      if (NOME || VALOR) {
        let virgula = false
        let newArray = []
        let sql = 'UPDATE Bebidas_sem_Álcool SET '
        if(NOME){
          sql = sql + ' NOME = ?'
          virgula = true
          newArray.push(NOME)
        }
        if(VALOR){
          if(virgula)
            sql = sql  +',VALOR = ?'
          else{
            sql = sql  +'VALOR = ?'
            virgula = true
          }
          newArray.push(VALOR)
        }
        sql = sql + 'WHERE ID = ?'
        newArray.push(ID)
        return new Promise((resolve, reject) => {
          this.db.run(sql, newArray, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
      else
      throw new Error('Nenhum atributo (NOME ou VALOR) enviado')
    }

    updateBebidasCA(ID, NOME, TEOR_ALCOOLICO, VALOR) {
        if (NOME ||TEOR_ALCOOLICO || VALOR){
          let virgula = false
          let newArray = []
          let sql = 'UPDATE Bebidas_sem_Álcool SET '
          if(NOME){
            sql = sql + ' NOME = ?'
            virgula = true
            newArray.push(NOME)
          }
          if(TEOR_ALCOOLICO){
            if(virgula)
              sql = sql  +',TEOR_ALCOOLICO = ?'
            else{
              sql = sql  +'TEOR_ALCOOLICO = ?'
              virgula = true
            }
            newArray.push(TEOR_ALCOOLICO)
          }
          if(VALOR){
            if(virgula)
              sql = sql  +',VALOR = ?'
            else{
              sql = sql  +'VALOR = ?'
              virgula = true
            }
            newArray.push(VALOR)
          }
          sql = sql + 'WHERE ID = ?'
          newArray.push(ID)
          return new Promise((resolve, reject) => {
            this.db.run(sql, newArray, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          });
        }
        else
        throw new Error('Nenhum atributo (NOME, TEOR_ALCOOLICO ou VALOR) enviado')
      }
  }
  
  module.exports = BebidasDAO;
  