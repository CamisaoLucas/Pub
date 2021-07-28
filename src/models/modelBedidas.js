    class BebidaSemAlcool{
        constructor(NOME, VALOR){
            this.NOME = NOME;
            this.VALOR = VALOR
        }
    }
    class BebidaComAlcool{
        constructor(NOME,TEOR_ALCOOLICO,VALOR){
            this.NOME = NOME;
            this.TEOR_ALCOOLICO = TEOR_ALCOOLICO;
            this.VALOR = VALOR
        }
    }

module.exports = {
    BebidaSemAlcool:BebidaSemAlcool,
    BebidaComAlcool:BebidaComAlcool}