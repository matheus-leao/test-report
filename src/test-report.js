export const validarResultadosDosTestes = (listaDeResultadosDeTeste) => {
    if(listaDeResultadosDeTeste.length==0){
        return {totalSucessos: 0, totalFalhas: 0, passRate: 0, status: 'Houve um erro na geração da lista'}
    }
    
    let totalSucessos = calcularSucessos(listaDeResultadosDeTeste)
    let totalFalhas = calcularTotalFalhas(listaDeResultadosDeTeste, totalSucessos)
    let passRate = calcularPassRate(listaDeResultadosDeTeste, totalSucessos)
    let status = obterStatus(passRate)

    return {totalSucessos, totalFalhas, passRate, status}  
}

// SOLID
//Single Responsability

const calcularSucessos = (listaDeResultadosDeTeste)=>{
    let totalSucessos = 0
    for(let i = 0; i <= listaDeResultadosDeTeste.length; i++){
        if(listaDeResultadosDeTeste[i] == 'pass'){
            totalSucessos++
        }
    }
    return totalSucessos
}

const calcularTotalFalhas = (listaDeResultadosDeTeste, totalSucessos) => {
    return listaDeResultadosDeTeste.length - totalSucessos
}

const calcularPassRate = (listaDeResultadosDeTeste, totalSucessos) => {
    return (totalSucessos / listaDeResultadosDeTeste.length)*100
}

const obterStatus = (passRate) => {
    let status = ''
    if(passRate <= 50){
        status = 'Bah! Senta aqui jovem!'
    } else if(passRate <= 89) {
        status = 'Perigo'
    }else if(passRate <= 99){
        status = 'Aceitável'
    } else {
        status= 'Rebeca Approved!'
    }
    return status
}