var mecanicos=[];
var maquinas=[];

mecanicos.push("Nicolas");
mecanicos.push("Diego");
mecanicos.push("Martin");

maquinas.push(303);
maquinas.push(208);
maquinas.push(190);

function esVacia(arreglo)
/*
 * Tomo un arreglo como parametro de entrada
 * Devuelve si el arreglo es vacio (true) o no (false)
 * 
 */
{
/*
	if (arreglo.length==0)
		return true;
	else
		return false;
		
		otra forma es:
*/
	return (arreglo.legnth==0);
}

/*esVacia(maquinas);
*esVacia(mecanicos);
*/

function asignar()
{
var nroMaquina=maquinas.shift();
var nomMecanico=mecanicos.pop();
document.write(nroMaquina+"-"+nomMecanico);
document.write("<br>");

 
}

while(!esVacia(maquinas) && !esVacia(mecanicos))
{
asignar();
return;
}
