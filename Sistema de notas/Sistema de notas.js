/*

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/

let nota = 100

function Boletim(nota) {

  let A = nota >= 90 && nota <= 100
  let B = nota >= 80 && nota <= 89
  let C = nota >= 70 && nota <= 79
  let D = nota >= 60 && nota <= 69
  let F = nota < 60 && nota >= 0

  let notaFinal

  if (A) {
    notaFinal = 'A'
  } else if (B) {
    notaFinal = 'B'
  } else if (C) {
    notaFinal = 'C'
  } else if (D) {
    notaFinal = 'D'
  } else if (F) {
    notaFinal = 'F'
  } else {
    notaFinal = 'Nota Invalida'
  }

  return notaFinal
}

notaAtual = Boletim(nota)

console.log(`A sua nota é (${notaAtual})`)