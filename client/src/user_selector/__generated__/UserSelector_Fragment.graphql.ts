/**
 * @generated SignedSource<<21b4add48e2078955c051470206a6d1b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserSelector_Fragment$data = {
  readonly id: string | null;
  readonly name: string | null;
  readonly " $fragmentType": "UserSelector_Fragment";
};
export type UserSelector_Fragment$key = {
  readonly " $data"?: UserSelector_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserSelector_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserSelector_Fragment",
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
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "7d957a591749803e89e9a6a91aa40939";

export default node;
