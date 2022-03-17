import { createRealmContext } from "@realm/react";
import { Human } from "../schemes/Human";
import { Pet } from "../schemes/Pet";

export default createRealmContext({
  schema: [Human, Pet],
});
