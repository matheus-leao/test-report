import assert from 'node:assert'
import {validarResultadosDosTestes} from '../src/test-report.js'

// Entrada: A lista de resultados dos testes
// Saída: Total de Sucessos, Total de Falhas, Pass Rate, Status

// Caso 1: {pass, fail, pass, pass} => TS= 3, TF=1, PR: 75%, Status: “Perigo”
// Caso 2: {9 pass, 1 fail} => TS= 9, TF=1, PR:90%, Status: Aceitável
// Caso 3: {pass,pass} => TS=2, TF= 0, PR: 100%, Status: Rebeca Approved!
// Caso 4: {fail, fail} => TS=0, TF=2, 0%, Status: “Bah! Senta aqui jovem!”

describe('Validação dos Resultados de Teste', function(){
    describe('Validações negativas', ()=>{
        it('75% deve retornar o Status de Perigo', ()=>{
            // Arrange -> Organiza
            const resultadosDosTestes = ['pass','fail', 'pass', 'pass'];
            const resultadoEsperado = {totalSucessos: 3, totalFalhas: 1, passRate: 75, status: "Perigo"}

            // Act -> Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadosDosTestes)

            // Assert -> Verifica/Valida/ Assert
            assert.deepEqual(resultadoEsperado, retorno)

        })
        it('0% deve retornar o Status de Bah! Senta aqui jovem!', ()=>{
            // Arrange -> Organiza
            const resultadosDosTestes = ['fail', 'fail'];
            const resultadoEsperado = {totalSucessos: 0, totalFalhas: 2, passRate: 0, status: "Bah! Senta aqui jovem!"}

            // Act -> Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadosDosTestes)

            // Assert -> Verifica/Valida/ Assert
            assert.deepEqual(resultadoEsperado, retorno)

        })

        it('Lista vazia', ()=>{
            // Arrange -> Organiza
            const resultadosDosTestes = [];
            const resultadoEsperado = {totalSucessos: 0, totalFalhas: 0, passRate: 0, status: "Houve um erro na geração da lista"}

            // Act -> Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadosDosTestes)

            // Assert -> Verifica/Valida/ Assert
            assert.deepEqual(resultadoEsperado, retorno)

        })
    })

    describe('Validações positivas', ()=>{
        it('90% deve retornar o Status de Aceitável', ()=>{
            // Arrange -> Organiza
            const resultadosDosTestes = ['pass','fail', 'pass', 'pass', 'pass', 'pass', 'pass', 'pass', 'pass', 'pass'];
            const resultadoEsperado = {totalSucessos: 9, totalFalhas: 1, passRate: 90, status: "Aceitável"}

            // Act -> Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadosDosTestes)

            // Assert -> Verifica/Valida/ Assert
            assert.deepEqual(resultadoEsperado, retorno)
        })
        it('100% deve retornar o Status de Rebeca Approved!', ()=>{
            // Arrange -> Organiza
            const resultadosDosTestes = ['pass', 'pass'];
            const resultadoEsperado = {totalSucessos: 2, totalFalhas: 0, passRate: 100, status: "Rebeca Approved!"}

            // Act -> Age/Executa Ação
            const retorno = validarResultadosDosTestes(resultadosDosTestes)

            // Assert -> Verifica/Valida/ Assert
            assert.deepEqual(resultadoEsperado, retorno)
        })
    })
})