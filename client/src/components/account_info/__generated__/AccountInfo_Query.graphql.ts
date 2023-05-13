/**
 * @generated SignedSource<<c53c87e1482b29cd60c9e99fa4157d30>>
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
    "kind": "Variable",
    "name": "userID",
    "variableName": "userID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountInfo_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccountInfo_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "01c02a3744c5fb0c71cc782ed744fe02",
    "id": null,
    "metadata": {},
    "name": "AccountInfo_Query",
    "operationKind": "query",
    "text": "query AccountInfo_Query(\n  $userID: String!\n) {\n  me(userID: $userID) {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e05889771abef27c0d35be1b4e71447a";

export default node;
