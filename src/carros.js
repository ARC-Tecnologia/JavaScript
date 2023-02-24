let carros = [
    {   
        id:1,
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2020,
        cor: 'branco',
        preco: 85000
    },
    { 
        id:2,
        marca: 'Ford',
        modelo: 'Mustang',
        ano: 1967,
        cor: 'azul',
        preco: 250000
    },
    { 
        id:3,
        marca: 'Tesla',
        modelo: 'Model S',
        ano: 2021,
        cor: 'preto',
        preco: 100000
    },
    { 
        id:4,
        marca: 'Chevrolet',
        modelo: 'Camaro',
        ano: 2019,
        cor: 'vermelho',
        preco: 150000
    },
]

function getCarros(){
    return carros
}

export default getCarros()