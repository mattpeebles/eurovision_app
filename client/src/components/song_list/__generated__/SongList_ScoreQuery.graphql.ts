/**
 * @generated SignedSource<<fd3996d7f08837b72b075cce964dee51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SongList_ScoreQuery$variables = {
  userID: string;
};
export type SongList_ScoreQuery$data = {
  readonly userScores: ReadonlyArray<{
    readonly points: number | null;
    readonly songID: string | null;
  } | null> | null;
};
export type SongList_ScoreQuery = {
  response: SongList_ScoreQuery$data;
  variables: SongList_ScoreQuery$variables;
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
    "concreteType": "Score",
    "kind": "LinkedField",
    "name": "userScores",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "songID",
        "storageKey": null
      },
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SongList_ScoreQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SongList_ScoreQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3ac0fe6999c3dd010751e66558ee40c6",
    "id": null,
    "metadata": {},
    "name": "SongList_ScoreQuery",
    "operationKind": "query",
    "text": "query SongList_ScoreQuery(\n  $userID: String!\n) {\n  userScores(userID: $userID) {\n    songID\n    points\n  }\n}\n"
  }
};
})();

(node as any).hash = "00f4937ddf1496baff0baee9d4d184b1";

export default node;
