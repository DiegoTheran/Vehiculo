const vehiculo = {
    
    KmPorLitro: '',
    RadioLlantas: 5,
    Color: 'Azul',
    EstaEncendido: false,                                                //set | findstr USER
    CantidadCombustible: 8,
    NewCantidadC: 0,
    kms: 0,
    capacidadTanque: 100,
    Aceleracion: 0,
    distancia: 0,

    RecorridoPorGiro(){
      //Para saber cuanto recorre depende del tamaño de la llanta
      //Para ello debemos encontrar el Perimetro de la llanta ya que es lo que va a recorrer cada vuelta => Usamos  2Pi multiplicado por r
      console.log(`Lo que recorre con un giro de llanta es: ${this.RadioLlantas*(2*3.14)} m/s`);

    },

    Tanquear(){ 
       /* if(this.CantidadCombustible < this.capacidadTanque){
            this.CantidadCombustible += Math.round(Math.random()*10);
            if(this.CantidadCombustible >= this.capacidadTanque){
                this.CantidadCombustible = this.capacidadTanque;
                console.log(`El combustible es: ${this.CantidadCombustible}`);

            }
        }
        */
        if(this.CantidadCombustible < this.capacidadTanque){
           this.CantidadCombustible = this.CantidadCombustible + Math.round(Math.random())
            console.log(`Combustible = ${this.CantidadCombustible}`);
        }else{this.CantidadCombustible > 100
            console.log('El tanque esta lleno');
            
        }

    },

    Encender(){
       if(this.CantidadCombustible >= 2){
           this.EstaEncendido = true;
           console.log('El vehiculo esta encendido');
       }else{
           console.log('El vehiculo esta apagado');
       }
    },

    Acelerar(){
      /* if(this.CantidadCombustible >= 2){
           console.log('El vehiculo esta encendido, puede acelerar...');
           //Acelerar en base a un numero random...
           this.Aceleracion = this.Aceleracion + Math.round(Math.random()*10)
           console.log(`El vehiculo acelera con una velocidad de ${this.Aceleracion} km/s`);
           //RESTAR CONSUMO.......................
           this.CantidadCombustible = this.Aceleracion-this.CantidadCombustible
           console.log(`El combustible restante es: ${this.CantidadCombustible} galones`);
          

       } */
       if(this.CantidadCombustible >= 2){
        console.log('El vehiculo esta encendido, puede acelerar...');
       do{ 
        //Acelerar en base a un numero random...
        this.Aceleracion = this.Aceleracion + Math.round(Math.random())
        console.log(`El vehiculo acelera con una velocidad de ${this.Aceleracion} km/h`);
        //RESTAR CONSUMO.......................
        this.CantidadCombustible = this.CantidadCombustible-this.Aceleracion
        console.log(`El combustible restante es: ${this.CantidadCombustible} galones`);
        this.distancia = this.CantidadCombustible/this.Aceleracion
        console.log(`El vehiculo ha recorrido ${this.distancia} km/h`)
        /*if(this.Aceleracion >= 200){
            console.log('El vehiculo alcanzo su maxima velocidad');
            

        }*/


        if(this.CantidadCombustible <=0){
            console.log('Sin combustible');
            break;
        }
       }
       while(this.Aceleracion > 0);
       
    }

    },

    Apagar(){
       if(this.CantidadCombustible <= 0){
           this.EstaEncendido = false;
           console.log('El vehiculo esta sin combustible, se apagará');
       }
    }

}
let obj = Object.create(vehiculo);

obj.Encender();
obj.RecorridoPorGiro();
obj.Tanquear();
obj.Acelerar();
obj.Apagar();