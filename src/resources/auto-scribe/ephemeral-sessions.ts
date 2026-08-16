// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class EphemeralSessions extends APIResource {
  /**
   * Mints a 30-second tokenized landing URL for a userless, studyless AutoScribe
   * viewer session. The token names a customer retrievalId (not an Avara study).
   * Optional options are echoed verbatim on ephemeral.access_requested (max 3072
   * bytes JSON). Optional hangingProtocol applies a single-monitor layout when the
   * viewer loads. Requires a customer study webhook on the API key.
   *
   * @example
   * ```ts
   * const ephemeralSession =
   *   await client.autoScribe.ephemeralSessions.create({
   *     retrievalId: 'order-12345',
   *   });
   * ```
   */
  create(
    body: EphemeralSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<EphemeralSessionCreateResponse> {
    return this._client.post('/v1/autoScribe/ephemeral-sessions', { body, ...options });
  }
}

/**
 * Tokenized landing URL for an ephemeral AutoScribe viewer session (30-second
 * token).
 */
export interface EphemeralSessionCreateResponse {
  url: string;
}

export interface EphemeralSessionCreateParams {
  /**
   * Opaque customer handle for this view session. Avara stores and echoes it; it is
   * not an Avara study ID.
   */
  retrievalId: string;

  /**
   * Optional single-monitor hanging protocol applied when the ephemeral viewer
   * loads. Omitted = no protocol. Invalid shape is rejected.
   */
  hangingProtocol?: Shared.EphemeralHangingProtocol;

  /**
   * Optional JSON object echoed verbatim on ephemeral.access_requested. Avara does
   * not read or edit it. Hard cap 3072 bytes on JSON.stringify. Examples:
   * studyInstanceUids or internal ids for multi-study reads. Not for URLs or
   * manifests.
   */
  options?: { [key: string]: unknown };
}

export declare namespace EphemeralSessions {
  export {
    type EphemeralSessionCreateResponse as EphemeralSessionCreateResponse,
    type EphemeralSessionCreateParams as EphemeralSessionCreateParams,
  };
}
