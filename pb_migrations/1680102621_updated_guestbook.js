migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  collection.createRule = "parent.reply=id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr0xaqpd7rcgg95")

  collection.createRule = null

  return dao.saveCollection(collection)
})
