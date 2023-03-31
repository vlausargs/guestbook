migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  collection.updateRule = "(@request.data.name:isset != true && @request.data.comment:isset != true)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
