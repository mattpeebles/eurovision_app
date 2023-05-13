/**
 * @generated SignedSource<<a96e584cc27d17f99189b1e258de346c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AccountInfo_Query$variables = {
  userID: string;
};
export type AccountInfo_Query$data = {
  readonly me: {
    readonly name: string | null;
  } | null;
};
export type AccountInfo_Query = {
  response: AccountInfo_Query$data;
  variables: AccountInfo_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userID",
        "variableName": "userID"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountInfo_Query",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccountInfo_Query",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "de31ed8eef55c68776579efe46fc9f79",
    "id": null,
    "metadata": {},
    "name": "AccountInfo_Query",
    "operationKind": "query",
    "text": "query AccountInfo_Query(\n  $userID: String!\n) {\n  me(userID: $userID) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "e05889771abef27c0d35be1b4e71447a";

export default node;
