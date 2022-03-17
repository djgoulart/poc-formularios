import { Realm } from "@realm/react";

export class Pet extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  type!: string;
  createdAt!: Date;

  constructor(
    _id = new Realm.BSON.ObjectId(),
    name: string,
    type: string,
    createdAt = new Date()
  ) {
    super();

    this._id = _id;
    this.name = name;
    this.type = type;
    this.createdAt = createdAt;
  }

  static generate(name: string, type: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      name,
      type,
      createdAt: new Date()
    }
  };

  static schema = {
    name: "Pet",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      type: "string",
      createdAt: "date",
      owner: {
        type: "linkingObjects",
        objectType: 'Human',
        property: 'pets'
      }
    }
  };
}
