const blueprint = require('./blueprint')

const { inflateSchema, inflateRelation, inflate } = require('../lib/inflate')

// console.log(blueprint);

const inflatedBlueprint = inflate({ blueprint })
