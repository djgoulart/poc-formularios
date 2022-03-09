import { createRealmContext } from "@realm/react";
import { Human } from "../schemes/Human";

export default createRealmContext({
  schema: [Human],
  deleteRealmIfMigrationNeeded: true,
});
