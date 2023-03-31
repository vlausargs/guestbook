migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v7eqkyiy",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kr0xaqpd7rcgg95",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "name",
        "comment"
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
    "id": "v7eqkyiy",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kr0xaqpd7rcgg95",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "comment",
        "id",
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
