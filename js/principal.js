import Cl_articulo from "./Cl_articulo.js";
import Cl_empresa from "./Cl_empresa.js";

let art1 = new Cl_articulo(888, 10, 15)
let art2 = new Cl_articulo(777, 20, 25)
let art3 = new Cl_articulo(999, 15, 25)
let art4 = new Cl_articulo(333, 25, 35)
let art5 = new Cl_articulo(111, 50, 70)
let art6 = new Cl_articulo(333, 40, 50)
let art7 = new Cl_articulo(444, 80, 100)
let art8 = new Cl_articulo(222, 5, 10)

let empresa = new Cl_empresa ();

empresa.procesarArticulo(art1);
empresa.procesarArticulo(art2);
empresa.procesarArticulo(art3);
empresa.procesarArticulo(art4);
empresa.procesarArticulo(art5);
empresa.procesarArticulo(art6);
empresa.procesarArticulo(art7);
empresa.procesarArticulo(art8);

let salida = document.getElementById("salida");

salida.innerHTML=`
Ganancia Total: ${empresa.acumGan}$
<br> Codigo del articulo con mayor precio de venta: ${empresa.auxCod}
`


