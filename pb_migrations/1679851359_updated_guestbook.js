migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5iuxsrlj",
    "name": "reply",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kr0xaqpd7rcgg95",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // remove
  collection.schema.removeField("5iuxsrlj")

  return dao.saveCollection(collection)
})
