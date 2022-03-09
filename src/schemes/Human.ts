import { Realm } from "@realm/react";

export class Human extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  age!: number;
  gender!: string;

  static generate(name: string, age: number, gender: string) {
    return {
      _id: new Realm.BSON.ObjectID(),
      name,
      age,
      gender,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: "Human",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      age: "int",
      gender: "string",
      createdAt: "date"
    }
  };
}
