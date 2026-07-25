// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as AutoScribeAPI from './auto-scribe';
import { APIPromise } from '../../core/api-promise';
import {
  CursorClinicalReferences,
  type CursorClinicalReferencesParams,
  PagePromise,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ClinicalReferences extends APIResource {
  /**
   * Creates a canonical clinical reference value for study workflow pickers and
   * normalization.
   *
   * @example
   * ```ts
   * const clinicalReference =
   *   await client.autoScribe.clinicalReferences.create({
   *     name: 'City Medical Center',
   *     type: 'facility',
   *   });
   * ```
   */
  create(body: ClinicalReferenceCreateParams, options?: RequestOptions): APIPromise<ClinicalReference> {
    return this._client.post('/v1/autoScribe/clinicalReferences', { body, ...options });
  }

  /**
   * Retrieves a single clinical reference by its unique identifier.
   *
   * @example
   * ```ts
   * const clinicalReference =
   *   await client.autoScribe.clinicalReferences.retrieve(
   *     'ref_1234567890abcdef1234567890abcdef',
   *   );
   * ```
   */
  retrieve(clinicalReferenceID: string, options?: RequestOptions): APIPromise<ClinicalReference> {
    return this._client.get(path`/v1/autoScribe/clinicalReferences/${clinicalReferenceID}`, options);
  }

  /**
   * Updates name, metadata, and Express customer assignment. Type is immutable after
   * create.
   *
   * @example
   * ```ts
   * const clinicalReference =
   *   await client.autoScribe.clinicalReferences.update(
   *     'ref_1234567890abcdef1234567890abcdef',
   *   );
   * ```
   */
  update(
    clinicalReferenceID: string,
    body: ClinicalReferenceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClinicalReference> {
    return this._client.patch(path`/v1/autoScribe/clinicalReferences/${clinicalReferenceID}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists clinical references with cursor-based pagination and optional filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const clinicalReference of client.autoScribe.clinicalReferences.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ClinicalReferenceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ClinicalReferencesCursorClinicalReferences, ClinicalReference> {
    return this._client.getAPIList(
      '/v1/autoScribe/clinicalReferences',
      CursorClinicalReferences<ClinicalReference>,
      { query, ...options },
    );
  }

  /**
   * Soft-deletes a clinical reference by setting isActive to false and suffixing the
   * name to free the unique constraint.
   *
   * @example
   * ```ts
   * const clinicalReference =
   *   await client.autoScribe.clinicalReferences.delete(
   *     'ref_1234567890abcdef1234567890abcdef',
   *   );
   * ```
   */
  delete(clinicalReferenceID: string, options?: RequestOptions): APIPromise<ClinicalReference> {
    return this._client.post(path`/v1/autoScribe/clinicalReferences/${clinicalReferenceID}/delete`, options);
  }

  /**
   * Retrieves a single clinical reference by its integrator-provided external
   * reference identifier.
   *
   * @example
   * ```ts
   * const clinicalReference =
   *   await client.autoScribe.clinicalReferences.retrieveByExternalReferenceID(
   *     'FAC-001',
   *   );
   * ```
   */
  retrieveByExternalReferenceID(
    externalReferenceID: string,
    options?: RequestOptions,
  ): APIPromise<ClinicalReference> {
    return this._client.get(
      path`/v1/autoScribe/clinicalReferences/byExternalReferenceId/${externalReferenceID}`,
      options,
    );
  }
}

export type ClinicalReferencesCursorClinicalReferences = CursorClinicalReferences<ClinicalReference>;

/**
 * A canonical clinical reference value for study workflow pickers and
 * normalization
 */
export interface ClinicalReference {
  /**
   * Unique clinical reference identifier. Format: ref\_{32-hex-chars}
   */
  clinicalReferenceId: string;

  /**
   * Timestamp when the clinical reference was created
   */
  createdAt: string | null;

  /**
   * Whether this reference is active and available for pickers
   */
  isActive: boolean;

  /**
   * Canonical display name for this reference value
   */
  name: string;

  /**
   * Category of canonical clinical reference value used for study workflow pickers
   * and normalization.
   */
  type: AutoScribeAPI.ClinicalReferenceType;

  /**
   * Timestamp when the clinical reference was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to an Express customer with basic identifying information
   */
  expressCustomer?: Shared.ExpressCustomerReference | null;

  /**
   * Integrator-provided stable identifier for mapping inbound data
   */
  externalReferenceId?: string | null;

  /**
   * Optional key-value metadata. Maximum 50 pairs
   */
  metadata?: { [key: string]: string };
}

export interface ClinicalReferenceCreateParams {
  name: string;

  /**
   * Category of canonical clinical reference value used for study workflow pickers
   * and normalization.
   */
  type: AutoScribeAPI.ClinicalReferenceType;

  expressCustomerId?: string;

  externalReferenceId?: string | null;

  metadata?: { [key: string]: string };
}

export interface ClinicalReferenceUpdateParams {
  expressCustomerId?: string;

  metadata?: { [key: string]: string } | null;

  name?: string;
}

export interface ClinicalReferenceListParams extends CursorClinicalReferencesParams {
  /**
   * Filter by Express customer ID. Omit for no filter; pass null for clinic-wide
   * references
   */
  expressCustomerId?: string;

  /**
   * Filter by active status. Defaults to true (active references only). Pass false
   * to list inactive references.
   */
  isActive?: boolean | null;

  /**
   * Filter by clinical reference type
   */
  type?: AutoScribeAPI.ClinicalReferenceType;
}

export declare namespace ClinicalReferences {
  export {
    type ClinicalReference as ClinicalReference,
    type ClinicalReferencesCursorClinicalReferences as ClinicalReferencesCursorClinicalReferences,
    type ClinicalReferenceCreateParams as ClinicalReferenceCreateParams,
    type ClinicalReferenceUpdateParams as ClinicalReferenceUpdateParams,
    type ClinicalReferenceListParams as ClinicalReferenceListParams,
  };
}
