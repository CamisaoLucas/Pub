const app = require('./Config/customExpress')
const port = 3030

//Listen
app.listen(process.env.PORT || port
    ,()=>{
    console.log(`Servidor rodando na porta: ${process.env.PORT || port}`)
})