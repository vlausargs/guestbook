migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x3muw3jf",
    "name": "created_by",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x3muw3jf",
    "name": "created_by",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
