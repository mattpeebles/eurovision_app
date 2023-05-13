/**
 * @generated SignedSource<<8a2fcc83c4114176cbdd329d2fe42ee8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SongList_Query$variables = {};
export type SongList_Query$data = {
  readonly songs: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"Song_Fragment">;
  } | null> | null;
};
export type SongList_Query = {
  response: SongList_Query$data;
  variables: SongList_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SongList_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Song",
        "kind": "LinkedField",
        "name": "songs",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Song_Fragment"
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
    "name": "SongList_Query",
    "selections": [
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
            "name": "country",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d79cc5103d3969ba01cd85724b4b20e6",
    "id": null,
    "metadata": {},
    "name": "SongList_Query",
    "operationKind": "query",
    "text": "query SongList_Query {\n  songs {\n    ...Song_Fragment\n  }\n}\n\nfragment Song_Fragment on Song {\n  title\n  artist\n  country\n}\n"
  }
};

(node as any).hash = "a3c2e2c34326fbf892d8efac5ed36205";

export default node;
