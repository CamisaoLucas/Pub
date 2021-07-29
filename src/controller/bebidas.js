const BebidasDAO = require('../DAO/BebidasDAO')
const {BebidaSemAlcool, BebidaComAlcool} = require('../models/modelBedidas')


module.exports = (app,db) =>{
    let bebidasBanco = new BebidasDAO(db);

    app.get("/todas_bebidas_sem_alcool", async (req, res) => {
        try {
        let resposta = await bebidasBanco.getAllBebidasSA();
        res.json({ result: resposta });
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    });

    app.get("/todas_bebidas_com_alcool", async (req, res) => {
        try {
        let resposta = await bebidasBanco.getAllBebidasCA();
        res.json({ result: resposta });
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    });

    app.get('/bebida_sem_Alcool/:ID', async (req, res)=>{
        const { ID } = req.params;
        try{
            let resposta = await bebidasBanco.getBebidaSA(ID);
            res.json({result:resposta});
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    });
    
    app.get("/bebida_com_alcool/:ID", async (req, res)=>{
        const { ID } = req.params;
        try{
            let resposta = await bebidasBanco.getBebidaCA(ID);
            res.json({result:resposta});
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    });


    app.post("/bebidas_sem_alcool", async (req, res) => {
        const { NOME, VALOR} = req.body;
        let newBebida= new BebidaSemAlcool(NOME, VALOR);
        try{
          await bebidasBanco.insertBebidaSA(newBebida);
          res.status(201).json({
            message: "Bebida inserida com sucesso",
            error: false,
          });
        } 
        catch (err) {
          res.status(500).json({
            message: "Erro ao inserir bebida",
            serverLog: err.message,
            error: true,
          });
        }
      });
    
    app.post("/bebidas_com_alcool", async (req, res) => {
        const { NOME, TEOR_ALCOOLICO,VALOR} = req.body;
        let newBebida= new BebidaComAlcool(NOME, TEOR_ALCOOLICO, VALOR);
        try{
          await bebidasBanco.insertBebidaCA(newBebida);
          res.status(201).json({
            message: "Bebida inserida com sucesso",
            error: false,
          });
        } 
        catch (err) {
          res.status(500).json({
            message: "Erro ao inserir bebida",
            serverLog: err.message,
            error: true,
          });
        }
      });

      app.delete("/bebidas_sem_alcool/:ID", async (req, res) => {
        const { ID } = req.params;
        try {
          await bebidasBanco.deleteBebidaSA(ID);
          res.status(200).json({
            message: "Bebida deletada com sucesso",
            error: false,
          });
        } catch (err) {
          res.status(500).json({
            message: "Erro ao deletar bebida",
            serverLog: err.message,
            error: true,
          });
        }
      });
    
      app.delete("/bebidas_com_alcool/:ID", async (req, res) => {
        const { ID } = req.params;
        try {
          await bebidasBanco.deleteBebidaCA(ID);
          res.status(200).json({
            message: "Bebida deletada com sucesso",
            error: false,
          });
        } 
        catch(err){
          res.status(500).json({
            message: "Erro ao deletar bebida",
            serverLog: err.message,
            error: true,
          });
        }
      });
    
    
    app.put("/bebidas_sem_alcool/:ID", async (req, res) => {
        const { NOME, VALOR } = req.body;
        const { ID } = req.params;
        try {
          await bebidasBanco.updateBebidasSA(ID, NOME, VALOR);
          res.status(200).json({
            message: "Bebida atualizada com sucesso",
            error: false,
          });
        } catch (err) {
          res.status(500).json({
            message: "Erro ao atualizar a bebida.",
            serverLog: err.message,
            error: true,
          });
        }
      });

    
    app.put("/bebidas_com_alcool/:ID", async (req, res) => {
        const { NOME, TEOR_ALCOOLICO, VALOR } = req.body;
        const { ID } = req.params;
        try {
          await bebidasBanco.updateBebidasCA(ID, NOME, TEOR_ALCOOLICO, VALOR);
          res.status(200).json({
            message: "Bebida atualizada com sucesso",
            error: false,
          });
        } catch (err) {
          res.status(500).json({
            message: "Erro ao atualizar a bebida.",
            serverLog: err.message,
            error: true,
          });
        }
    });
    

    
}