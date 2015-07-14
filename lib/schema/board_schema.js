Boards = new Mongo.Collection("boards");

Boards.initEasySearch([
  'brandName',
  'modelName',
  'height',
  'width',
  'thickness',
  'boardType',
  'tailType',
  'finSetup',
  'finSystem',
  'askingPrice',
  'location',
  'email',
  'phone']);

BoardsSchema = new SimpleSchema({
  brandName: {
    type: String,
    optional: true,
    label: "Brand Name",
    max: 200
  },
  modelName: {
    type: String,
    optional: true,
    label: "Model Name",
    max: 200
  },
  height: {
    type: String,
    optional: true,
    label: "Height",
    max: 200
  },
  width: {
    type: String,
    optional: true,
    label: "Width",
    max: 200
  },
  thickness: {
    type: String,
    optional: true,
    label: "Thickness",
    max: 200
  },
  boardType: {
    type: String,
    optional: true,
    label: "Board Type",
    max: 200
  },
  tailType: {
    type: String,
    optional: true,
    label: "Tail Type",
    max: 200
  },
  finSetup: {
    type: String,
    optional: true,
    label: "Fin Setup",
    max: 200
  },
  finSystem: {
    type: String,
    optional: true,
    label: "Fin System",
    max: 200
  },
  askingPrice: {
    type: String,
    optional: true,
    label: "Asking Price",
    max: 200
  },
  location: {
    type: String,
    optional: true,
    label: "Location",
    max: 200
  },
  email: {
    type: String,
    optional: false,
    label: "Email",
    max: 200
  },
  phone: {
    type: String,
    optional: true,
    label: "Phone",
    max: 200
  }

})


