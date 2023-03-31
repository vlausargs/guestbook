migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lvbdufax",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // remove
  collection.schema.removeField("lvbdufax")

  return dao.saveCollection(collection)
})
