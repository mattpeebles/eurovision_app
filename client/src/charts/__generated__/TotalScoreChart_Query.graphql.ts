/**
 * @generated SignedSource<<4c7a526892f326fcc3ce989da5f154e9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TotalScoreChart_Query$variables = {};
export type TotalScoreChart_Query$data = {
  readonly rankings: ReadonlyArray<{
    readonly scores: ReadonlyArray<{
      readonly points: number | null;
      readonly userID: string | null;
    } | null> | null;
    readonly songID: string | null;
    readonly total: number | null;
  } | null> | null;
  readonly songs: ReadonlyArray<{
    readonly artist: string | null;
    readonly country: string | null;
    readonly id: string;
    readonly title: string | null;
  } | null> | null;
};
export type TotalScoreChart_Query = {
  response: TotalScoreChart_Query$data;
  variables: TotalScoreChart_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Ranking",
    "kind": "LinkedField",
    "name": "rankings",
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
        "name": "total",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Score",
        "kind": "LinkedField",
        "name": "scores",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userID",
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
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Song",
    "kind": "LinkedField",
    "name": "songs",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "country",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "artist",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TotalScoreChart_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TotalScoreChart_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "cd7445ebe9e13791827f24dd54e4e7fc",
    "id": null,
    "metadata": {},
    "name": "TotalScoreChart_Query",
    "operationKind": "query",
    "text": "query TotalScoreChart_Query {\n  rankings {\n    songID\n    total\n    scores {\n      userID\n      points\n    }\n  }\n  songs {\n    country\n    title\n    artist\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "3ef1609f2a3f862d1bcdc401553044e2";

export default node;
