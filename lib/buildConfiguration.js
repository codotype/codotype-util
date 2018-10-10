const cloneDeep = require('lodash/cloneDeep')

function buildConfiguration ({ blueprint, generator }) {
  const configuration = {
    options: {},
    model_options: {}
  }

  // Defines global options
  generator.global_options.forEach((opt) => {
    configuration.options[opt.identifier] = opt.default_value
  })

  // Defines model options
  const defaultModelOptions = {}
  generator.model_options.forEach((opt) => {
    defaultModelOptions[opt.identifier] = opt.default_value
  })

  // Creates an instance of defaultModelOptions in
  // configuration.model_options for each model in the blueprint
  blueprint.schemas.forEach((model) => {
    configuration.model_options[model._id] = cloneDeep(defaultModelOptions)
  })

  // Returns configuration object
  // console.log(configuration)
  return configuration
}

module.exports = buildConfiguration
