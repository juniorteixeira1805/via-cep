const controllerCep = require('../../../src/controllers/cep/controller')

describe('Conjuntos de testes da função validatorCep', () => {
  it('Entrada de um cep valido', () => {
    expect(controllerCep.validatorCep('59076305')).toBe(true)
  })

  it('Entrada de um cep faltando digitos', () => {
    expect(controllerCep.validatorCep('5907635')).toBe({ error: 'O cep informado deve conter 8 digitos!' })
  })

  it('Sem cep', () => {
    expect(controllerCep.validatorCep()).toBe({ error: 'O cep informado deve conter 8 digitos!' })
  })
})
