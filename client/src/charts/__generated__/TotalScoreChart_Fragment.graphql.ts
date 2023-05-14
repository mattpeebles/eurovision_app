/**
 * @generated SignedSource<<6a089dab49833200411a4439762f7251>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TotalScoreChart_Fragment$data = {
  readonly artist: string | null;
  readonly country: string | null;
  readonly id: string;
  readonly title: string | null;
  readonly " $fragmentType": "TotalScoreChart_Fragment";
};
export type TotalScoreChart_Fragment$key = {
  readonly " $data"?: TotalScoreChart_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TotalScoreChart_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TotalScoreChart_Fragment",
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

(node as any).hash = "a6ab136ab9f48cb84d4ec79f06c6a170";

export default node;
