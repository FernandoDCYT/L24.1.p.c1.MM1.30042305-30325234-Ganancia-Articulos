export default class Cl_articulo{
    constructor(cod, costo, precioV){
        this.cod=cod;
        this.costo=costo;
        this.precioV=precioV;
    }
    set cod(c){
        this._cod=c;
    }
    get cod(){
        return this._cod;
    }
    set costo(cT){
        this._costo=cT;
    }
    get costo(){
        return this._costo;
    }
    set precioV(p){
        this._precioV=p;
    }
    get precioV(){
        return this._precioV;
    }
    calcGan(){
        return this.precioV - this.costo;
    }
}