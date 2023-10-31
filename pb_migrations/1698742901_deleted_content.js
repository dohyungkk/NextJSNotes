/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4argfnbgll5f1fe");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4argfnbgll5f1fe",
    "created": "2023-10-30 21:38:06.312Z",
    "updated": "2023-10-30 21:38:06.312Z",
    "name": "content",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7gqsqter",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
