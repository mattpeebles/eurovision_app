/**
 * @generated SignedSource<<ec5a6adc23cdfdf90ede5b14b0c731c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Login_Query$variables = {};
export type Login_Query$data = {
  readonly users: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"UserSelector_Fragment">;
  } | null> | null;
};
export type Login_Query = {
  response: Login_Query$data;
  variables: Login_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Login_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserSelector_Fragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Login_Query",
    "selections": [
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
    ]
  },
  "params": {
    "cacheID": "16a0005458644791caf829b89855ce2c",
    "id": null,
    "metadata": {},
    "name": "Login_Query",
    "operationKind": "query",
    "text": "query Login_Query {\n  users {\n    ...UserSelector_Fragment\n  }\n}\n\nfragment UserSelector_Fragment on User {\n  id\n  name\n}\n"
  }
};

(node as any).hash = "7d2761fb2896ed6d8cb0b4b89ed2057b";

export default node;
