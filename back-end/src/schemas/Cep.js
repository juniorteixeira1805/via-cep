const mongoose = require('../database/index')

const cepSchema = mongoose.Schema({
  dateCreater: {
    type: Date,
    require: true,
    default: Date.now
  },
  cep: {
    type: String,
    required: true
  },
  logradouro: {
    type: String
  },
  complemento: {
    type: String
  },
  bairro: {
    type: String
  },
  localidade: {
    type: String
  },
  uf: {
    type: String
  },
  ibge: {
    type: String
  },
  gia: {
    type: String
  },
  ddd: {
    type: String
  },
  siafi: {
    type: String
  }
})

// Definido o pluglin para poder utilizar a função paginate

mongoose.model('ceps', cepSchema)
