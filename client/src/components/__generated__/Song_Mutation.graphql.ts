/**
 * @generated SignedSource<<78e4d091c29d37322c2212a301f9258c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type Song_Mutation$variables = {
  points: number;
  songID: string;
  userID: string;
};
export type Song_Mutation$data = {
  readonly ensureScore: {
    readonly points: number | null;
  } | null;
};
export type Song_Mutation = {
  response: Song_Mutation$data;
  variables: Song_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "points"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "songID"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userID"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "points",
        "variableName": "points"
      },
      {
        "kind": "Variable",
        "name": "songID",
        "variableName": "songID"
      },
      {
        "kind": "Variable",
        "name": "userID",
        "variableName": "userID"
      }
    ],
    "concreteType": "Score",
    "kind": "LinkedField",
    "name": "ensureScore",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "points",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "Song_Mutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "Song_Mutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "c75f37364e72eba09da7eeda5fffecde",
    "id": null,
    "metadata": {},
    "name": "Song_Mutation",
    "operationKind": "mutation",
    "text": "mutation Song_Mutation(\n  $userID: String!\n  $songID: String!\n  $points: Int!\n) {\n  ensureScore(userID: $userID, songID: $songID, points: $points) {\n    points\n  }\n}\n"
  }
};
})();

(node as any).hash = "341e16fb356578ec8cb8fe0f01e54596";

export default node;
