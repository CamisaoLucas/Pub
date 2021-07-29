const request = require('supertest');
const app = require('../Config/customExpress');

describe('Testando rotas de ',()=>{
    
    it('GET /todas_bebidas_sem_alcool ', async () =>{
        const response = await request(app)
        .get('/todas_bebidas_sem_alcool')
        expect(response.body).toHaveProperty('result')
    })

    it('GET /bebida_sem_Alcool/:ID ', async () =>{
        const response = await request(app)
        .get('/bebida_sem_Alcool/1')
        expect(response.body).toHaveProperty('result')
    })
    
    it('POST /bebidas_sem_alcool certo', async() =>{
        const response = await request(app)
        .post('/bebidas_sem_alcool')
        .send({
            NOME:'Vodka',
            VALOR:15
            
        })
        expect(response.body.error).toBe(false)
    })

    it('PUT /bebidas_sem_alcool/:ID', async() =>{
        const response = await request(app)
        .put('/bebidas_sem_alcool/1')
        .send({
            "NOME": "",
            "VALOR": 0.00
        })
        expect(response.body).toHaveProperty('message')
    })

    it('DELETE /bebidas_sem_alcool/:ID ', async() =>{
        const response = await request(app)
        .get('/users/1')
        expect(response).toBeTruthy()
    })
})