import assert from 'node:assert'
import {validarResultadosDosTestes} from '../../src/test-report.js'


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