migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t6agi7dd",
    "name": "reply",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "70w1lp0mw530o0d",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // remove
  collection.schema.removeField("t6agi7dd")

  return dao.saveCollection(collection)
})
