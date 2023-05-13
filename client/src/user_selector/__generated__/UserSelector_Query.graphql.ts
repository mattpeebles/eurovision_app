/**
 * @generated SignedSource<<86c2f0addcf5c8028f2124dfb8044aae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type UserSelector_Query$variables = {};
export type UserSelector_Query$data = {
  readonly users: ReadonlyArray<{
    readonly id: string;
    readonly name: string | null;
  } | null> | null;
};
export type UserSelector_Query = {
  response: UserSelector_Query$data;
  variables: UserSelector_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserSelector_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserSelector_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "976724370898a46411d68282dcc8c284",
    "id": null,
    "metadata": {},
    "name": "UserSelector_Query",
    "operationKind": "query",
    "text": "query UserSelector_Query {\n  users {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "edf13771ab0d5ff2756ae41a31a14754";

export default node;
