const api = require('../../services/api')

const mongoose = require('../../database/index')

require('../../schemas/Cep')
const Cep = mongoose.model('ceps')

module.exports = {
  async verifyCep (cep) {
    try {
      const findCep = await Cep.findOne({ cep: cep.replace(/(\d{5})(\d)/, '$1-$2') })
      if (!findCep) return false

      return findCep
    } catch (err) {
      console.log(err)
      return ({ error: 'Ocorreu um erro, tente novamente!' })
    }
  },

  async getCep (cep) {
    try {
      const response = await api.get(`ws/${cep}/json/`)
      if (response.data.erro === true) return ({ error: 'Este cep não existe!' })

      const newCep = await Cep.create(response.data)

      return newCep
    } catch (err) {
      console.log(err)
      return ({ error: 'Ocorreu um erro, tente novamente!' })
    }
  },

  validatorCep (cep) {
    try {
      if (!cep) return { error: 'O cep é obrigatório!' }
      if (cep.length !== 8) return { error: 'O cep informado deve conter 8 digitos sem caracteres!' }

      return true
    } catch (err) {
      return ({ error: 'Ocorreu um erro, tente novamente!' })
    }
  }
}
