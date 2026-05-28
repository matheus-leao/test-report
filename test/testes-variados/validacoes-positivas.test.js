import assert from 'node:assert'
import {validarResultadosDosTestes} from '../../src/test-report.js'

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