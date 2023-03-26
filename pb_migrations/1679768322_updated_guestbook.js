migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // remove
  collection.schema.removeField("urk7zizm")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "urk7zizm",
    "name": "email",
    "type": "email",
    "required": true,
    "unique": true,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
})
