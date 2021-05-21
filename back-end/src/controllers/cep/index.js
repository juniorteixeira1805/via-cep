const controllerCep = require('./controller')

module.exports = {
  async store (req, res) {
    try {
      const validacao = controllerCep.validatorCep(req.body.cep)
      if (validacao !== true) return res.status(400).send(validacao)

      const { cep } = req.body

      const findCep = await controllerCep.verifyCep(cep)
      if (findCep !== false) return findCep

      const newCep = await controllerCep.getCep(cep)
      return newCep
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'Erro no registro.' })
    }
  }
}
