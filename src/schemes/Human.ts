import { Realm } from "@realm/react";

export class Human extends Realm.Object {
  public _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;
  pets!: Realm.Object[];
  createdAt!: Date;

  constructor(
    name: string,
    email: string,
    _id = new Realm.BSON.ObjectId(),
    createdAt = new Date()
  ) {
    super();

    this._id = _id;
    this.name = name;
    this.email = email;
    this.pets = [];
    this.createdAt = createdAt;
  }

  static generate(name: string, email: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      name,
      email,
      pets: [],
      createdAt: new Date()
    }
  };

  static schema = {
    name: "Human",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      email: "string",
      pets: "Pet[]",
      createdAt: "date"
    }
  };
}
