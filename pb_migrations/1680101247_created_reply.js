migrate((db) => {
  const collection = new Collection({
    "id": "70w1lp0mw530o0d",
    "created": "2023-03-29 14:47:27.251Z",
    "updated": "2023-03-29 14:47:27.251Z",
    "name": "reply",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4paonjqr",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "apfc5svd",
        "name": "comment",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sapptmh0",
        "name": "parent",
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("70w1lp0mw530o0d");

  return dao.deleteCollection(collection);
})
