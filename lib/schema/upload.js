Boards = new Mongo.Collection("boards");
Boards.attachSchema(new SimpleSchema({
  brandName: {
    type: String,
    label: "Brand Name",
    max: 200
  },
  modelName: {
    type: String,
    label: "Model Name",
    max: 200
  },
  height: {
    type: String,
    label: "Height",
    max: 200
  },
  width: {
    type: String,
    label: "Width",
    max: 200
  },
  thickness: {
    type: String,
    label: "thickness",
    max: 200
  },
  boardType: {
    type: String,
    label: "Board Type",
    max: 200
  },
  tailType: {
    type: String,
    label: "Tail Type",
    max: 200
  },
  finSetup: {
    type: String,
    label: "Fin Setup",
    max: 200
  },
  finSystem: {
    type: String,
    label: "Fin System",
    max: 200
  },
  askingPrice: {
    type: String,
    label: "Asking Price",
    max: 200
  },
  location: {
    type: String,
    label: "Location",
    max: 200
  },
  email: {
    type: String,
    label: "Email",
    max: 200
  },
  phone: {
    type: String,
    label: "Phone",
    max: 200
  },

}));