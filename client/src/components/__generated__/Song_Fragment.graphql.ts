/**
 * @generated SignedSource<<39cee7c6222ce2336e8712f5cf6a3777>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Song_Fragment$data = {
  readonly artist: string | null;
  readonly country: string | null;
  readonly title: string | null;
  readonly " $fragmentType": "Song_Fragment";
};
export type Song_Fragment$key = {
  readonly " $data"?: Song_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Song_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Song_Fragment",
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
  "type": "Song",
  "abstractKey": null
};

(node as any).hash = "fe232748054fac1fa1e85583a2e5f59d";

export default node;
