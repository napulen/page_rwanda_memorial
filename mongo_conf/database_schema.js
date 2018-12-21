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
            pattern: "^.+\@.+$",
            description: 'required and must be a valid email address'
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
         },
         'Date de naissance de la victime': {
            bsonType: 'string',
            pattern: "^[0-9]{4}-(0[0-9]|1[0-2])-(0[0-9]|[0-2][0-9]|3[0-1])$",
            description: 'must be a string with the form YYYY-MM-DD'
         },
         'Date de décès de la victime': {
            bsonType: 'string',
            pattern: "^[0-9]{4}-(0[0-9]|1[0-2])-(0[0-9]|[0-2][0-9]|3[0-1])$",
            description: 'must be a string with the form YYYY-MM-DD'
         }
      }
   } },
   validationLevel: 'strict'
} )
