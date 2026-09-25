// Atividade 1 – Classificação de Temperatura
// Crie uma variável chamada temperatura e atribua um valor numérico a ela.
// O programa deverá verificar a temperatura e exibir:
// "Muito frio" se a temperatura for menor que 15.
// "Frio" se a temperatura estiver entre 15 e 20.
// "Agradável" se a temperatura estiver entre 21 e 28.
// "Muito quente" se a temperatura for maior que 28.
// Teste o programa utilizando diferentes valores para a variável temperatura.


let temperatura = 30;
if (temperatura <15) {
    console.log("Muito frio");
} else if (temperatura >= 15 && temperatura <=20) {;
    console.log("Frio");
} else if (temperatura >= 21 && temperatura <=28){;
    console.log("Agradável");
} else if (temperatura >28) 
    console.log("Muito quente");

    console.log("--------------------------------------------");
    
    // Atividade 2 – Nota e Conceito
    // Crie uma variável chamada nota e atribua uma nota entre 0 e 10. 
    // O programa deverá verificar a nota e exibir o conceito correspondente:
    // "Conceito A" se a nota for maior ou igual a 9.
    // "Conceito B" se a nota for maior ou igual a 7.
    // "Conceito C" se a nota for maior ou igual a 5.
    // "Conceito D" se a nota for menor que 5.
    // Teste o programa utilizando diferentes notas.
    
    let nota = 8;
    if (nota >=9) {;
        console.log("Conceito A");
    } else if (nota >=7) {;
        console.log("Conceito B");
    } else if (nota >=5) {
        console.log("Conceito C");
    } else if (nota <5){
        console.log("Conceito D");
    }
    
    console.log("--------------------------------------------");
    
    // Atividade 3 – Dia da Semana
    // Crie uma variável chamada dia e atribua um número de 1 a 7.
    // O programa deverá exibir o nome do dia correspondente:
    // 1 → "Domingo"
    // 2 → "Segunda-feira"
    // 3 → "Terça-feira"
    // 4 → "Quarta-feira"
    // 5 → "Quinta-feira"
    // 6 → "Sexta-feira"
    // 7 → "Sábado"
    // Caso seja informado um número diferente de 1 a 7, exiba:
    // "Dia inválido"
    // Teste o programa utilizando diferentes números.
    
    let dia = 6;
    if (dia= 1) {
        console.log("Domingo");
    } else if (dia = 2) {
        console.log("Segunda-feira");
    } else if (dia = 3) {
        console.log("Terça-feira");
    } else if (dia = 4) {
        console.log("Quarta-feira");
    } else if (dia = 5) {
        console.log("Quinta-feira");
    } else if (dia = 6) {
        console.log("Sexta-feira");
    } else if (dia = 7) {
        console.log("Sábado");
    }
    
    console.log("--------------------------------------------");

// Desafio – Calculadora de IMC
// Crie um programa que calcule o Índice de Massa Corporal (IMC).
// O programa deverá:Criar uma variável para armazenar o peso.Criar uma variável para armazenar a altura.Calcular o IMC utilizando a fórmula:
// IMC = peso / (altura * altura)Verificar o resultado do IMC.Exibir uma das seguintes mensagens:
// "Abaixo do peso"
// "Peso normal"
// "Sobrepeso"
// "Obeso"

let peso = 47;
let altura = 1.56;
let imc = peso/ altura*altura;

if (imc <18.5) {;
    console.log("Baixo peso");
} else if (imc >=18.5 && imc <=24.9) {;
    console.log("Peso normal");
} else if (imc >=18 && imc <=24.9) {;
    console.log("Sobrepeso");
} else if (imc >=25 && imc <=29.9) {;
    console.log("Obesidade grau I");
} else if (imc >=30 && imc <=34.9) {;
    console.log("Obesidade grau II");
} else if (imc >=35 && imc <=39.9) {;
    console.log("Obesidade grau III");

}