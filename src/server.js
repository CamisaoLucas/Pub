const app = require('./Config/customExpress')

//Listen
app.listen(5432,()=>{
    console.log(`Servidor rodando na porta: ${5432}`)
})