/* Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. 
Suele hacer venta por correo y la empresa de logística les cobra por peso 
de cada paquete así que deben calcular el peso de los payasos y 
muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. 

Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y 
calcule el peso total del paquete que será enviado */
 
 function productos(){
    let munecasVendidas = document.getElementById("munecasVendidas").value;
    let payasosVendidos = document.getElementById("payasosVendidos").value;
    let pesoMunecas = munecasVendidas * 75;
    let pesoPayasos = payasosVendidos * 112;
    let pesoTotal= Math.ceil((pesoMunecas + pesoPayasos)/1000);//0.075
    //(5 *.75 ) / 1000 =0.0037
    ///(10 * 112) / 1000=1.12
    // (3.75 + ) / 1000 =1.1237
    document.write(`<h1>El numero de paquetes es: ${pesoTotal} con un peso total de: ${(pesoMunecas+pesoPayasos)/1000}kg </h1>`);


 }