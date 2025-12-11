/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_308246142")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool1954138354",
    "name": "oferta",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "bool720804565",
    "name": "destacado",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number2408568195",
    "max": null,
    "min": null,
    "name": "precio_oferta",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_308246142")

  // remove field
  collection.fields.removeById("bool1954138354")

  // remove field
  collection.fields.removeById("bool720804565")

  // remove field
  collection.fields.removeById("number2408568195")

  return app.save(collection)
})
