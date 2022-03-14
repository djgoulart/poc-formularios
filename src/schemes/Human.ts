import { Realm } from "@realm/react";

export class Human extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;

  static generate(name: string, email: string) {
    return {
      _id: new Realm.BSON.ObjectID(),
      name,
      email,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: "Human",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      email: "string",
      createdAt: "date"
    }
  };
}
