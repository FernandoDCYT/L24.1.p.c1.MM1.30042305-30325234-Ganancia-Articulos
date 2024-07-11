export default class Cl_empresa{
    constructor(){
        this.acumGan=0.0;
        this.mayor=0.0;
        this.auxCod="";
    }
    procesarArticulo(a){
        this.acumGan+= a.calcGan()
        if(a.precioV > this.mayor){
            this.mayor = a.precioV; 
            this.auxCod = a.cod;
        }
    }
} 