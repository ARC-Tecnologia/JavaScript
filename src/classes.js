/*a classe Animal pode ser mantida em um arquivo chamado Animal.js e a classe Cachorro 
*pode ser mantida em um arquivo chamado Cachorro.js. Ao fazer-mos isso, é importante importar 
*as classes necessárias em outros arquivos do projeto para utilizá-las. 
*Podemos separar em duas classes: Animal e Cachorro. A classe Cachorro herdará os 
*métodos e propriedades da classe Animal por meio da herança. */
class Animal {

    constructor(especie){
        this.especie = especie
    }

    falar(){
        console.log(this.especie + ' fala ')
    }

    comer(){
        console.log(this.especie + ' come ')
    }

    dormir(){
        console.log(this.especie + ' dorme ')
    }

}

export default class Cachorro extends Animal{
    falar(){
        console.log(this.especie + ' fala au au au')
    }

    comer(){
        console.log(this.especie + ' come ração ')
    }
}

