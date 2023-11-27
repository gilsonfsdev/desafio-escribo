function somatorioMultiplosDe3e5(numero) {
  if (numero <= 0) {
      return 0;
  }

  let somatorio = 0;

  for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          somatorio += i;
      }
  }

  return somatorio;
}

export somatorioMultiplosDe3e5()