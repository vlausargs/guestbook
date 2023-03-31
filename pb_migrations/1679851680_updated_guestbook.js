migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // update
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
      "maxSelect": null,
      "displayFields": [
        "comment",
        "name",
        "created_by",
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // update
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
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
