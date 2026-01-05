// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Avara } from '../client';

export abstract class APIResource {
  protected _client: Avara;

  constructor(client: Avara) {
    this._client = client;
  }
}
