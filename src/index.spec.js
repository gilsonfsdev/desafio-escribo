import { expect, describe, it} from 'vitest'

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

describe('Test Function', () => {
  it('should be able to test a function', async () => {
    const resultado = somatorioMultiplosDe3e5(10) // 3 + 5 + 6 + 9 = 23

    expect(resultado).toEqual(23)
  })

  it('should be able to test a function', async () => {
    const resultado = somatorioMultiplosDe3e5(20) // 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78

    expect(resultado).toEqual(78)
  })

})
