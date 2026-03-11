/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

let nome = "luis";
let banco = "bankMONEY";
let agencia = 50;
let conta = 159753;
let saldo = 1000;
let transf1 = 400;
let transf2 = 555;
let transf3 = 600;
let transf4 = 1200;
let transf5 = 650;



console.log("---------------------------");
console.log("imprimir dados...");
console.log("nome:", nome);
console.log("banco:", banco);
console.log("numero da agência", agencia);
console.log("numero da conta".conta);
console.log("saldo: $", saldo);



console.log("você realizou uma transferência",transf1   ,"reais para roberta, saldo atual R$",saldo -= transf1);

console.log("Você recebeu uma transferencia",transf2  ,"saldo atual R$",saldo += transf2 );

console.log("você realizou uma transferência", transf3 ,"para ltda game, saldo atual R$",saldo -= transf3 );

console.log("você recebeu uma trasferencia", transf4 ,"de ltda game, saldo atual R$",saldo += transf4 );

console.log("você realizou uma transferência", transf5 ,"reais para bankmoney, saldo atual R$",saldo -= transf5,);

