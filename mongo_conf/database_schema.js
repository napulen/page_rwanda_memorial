use memorial

db.runCommand( {
   collMod: 'victimes',
   validator: { $jsonSchema: {
      bsonType: 'object',
      required: [ 'Prénom de la personne que soumet le formulaire',
                  'Nom de la personne que soumet le formulaire',
                  'Email address soumeter',
                  'Relation avec la victime',
                  'Prénom de la victime',
                  'Nom de la victime'
                ],
      properties: {
         'Prénom de la personne que soumet le formulaire': {
            bsonType: 'string',
            description: 'must be a string and is required'
         },
         'Nom de la personne que soumet le formulaire': {
            bsonType: 'string',
            description: 'must be a string and is required'
         },
         'Email address soumeter': {
            bsonType: 'string',
            description: 'must be a string and is required'
         },
         'Relation avec la victime': {
            bsonType: 'string',
            description: 'must be a string and is required'
         },
         'Prénom de la victime': {
            bsonType: 'string',
            description: 'must be a string and is required'
         },
         'Nom de la victime': {
            bsonType: 'string',
            description: 'must be a string and is required'
         }
      }
   } },
   validationLevel: 'strict'
} )
