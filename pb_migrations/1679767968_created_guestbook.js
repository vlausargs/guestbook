migrate((db) => {
  const collection = new Collection({
    "id": "kr0xaqpd7rcgg95",
    "created": "2023-03-25 18:12:48.961Z",
    "updated": "2023-03-25 18:12:48.961Z",
    "name": "guestbook",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "jfchv77j",
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
        "id": "zse5pcal",
        "name": "comment",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95");

  return dao.deleteCollection(collection);
})
