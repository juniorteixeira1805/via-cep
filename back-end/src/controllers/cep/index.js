const controllerCep = require('./controller')

module.exports = {
  async store (req, res) {
    try {
      const validacao = controllerCep.validatorCep(req.body.cep)
      if (validacao !== true) return res.status(400).send(validacao)

      const { cep } = req.body

      const findCep = await controllerCep.verifyCep(cep)
      if (findCep !== false) return res.send(findCep)

      const newCep = await controllerCep.getCep(cep)
      return res.send(newCep)
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'Erro no registro.' })
    }
  }
}
