/**
 * @generated SignedSource<<e912a4cd531bfa6d328f78bfb46d3bbb>>
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
  readonly id: string;
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
      "name": "id",
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
      "name": "country",
      "storageKey": null
    }
  ],
  "type": "Song",
  "abstractKey": null
};

(node as any).hash = "937830b571fcd726fb244abc81dc1754";

export default node;
