// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { CursorStudies, type CursorStudiesParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Studies extends APIResource {
  create(body: StudyCreateParams, options?: RequestOptions): APIPromise<StudyCreateResponse> {
    return this._client.post('/v1/viewer/studies', { body, ...options });
  }

  retrieve(studyID: string, options?: RequestOptions): APIPromise<StudyRetrieveResponse> {
    return this._client.get(path`/v1/viewer/studies/${studyID}`, options);
  }

  update(
    studyID: string,
    body: StudyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUpdateResponse> {
    return this._client.patch(path`/v1/viewer/studies/${studyID}`, { body, ...options });
  }

  list(
    query: StudyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StudyListResponsesCursorStudies, StudyListResponse> {
    return this._client.getAPIList('/v1/viewer/studies', CursorStudies<StudyListResponse>, {
      query,
      ...options,
    });
  }

  cancel(
    body: StudyCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyCancelResponse> {
    return this._client.post('/v1/viewer/studies/cancel', { body, ...options });
  }

  rerouteURL(
    body: StudyRerouteURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyRerouteURLResponse> {
    return this._client.post('/v1/viewer/studies/reroute-url', { body, ...options });
  }

  retrieveByUid(studyInstanceUid: string, options?: RequestOptions): APIPromise<StudyRetrieveByUidResponse> {
    return this._client.get(path`/v1/viewer/studies/by-uid/${studyInstanceUid}`, options);
  }

  uncancel(
    body: StudyUncancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUncancelResponse> {
    return this._client.post('/v1/viewer/studies/uncancel', { body, ...options });
  }
}

export type StudyListResponsesCursorStudies = CursorStudies<StudyListResponse>;

/**
 * A study entity in the Viewer system with viewing status
 */
export interface StudyCreateResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyViewerStatus: 'incomplete' | 'complete';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: Shared.OrgReference | null;
}

/**
 * A study entity in the Viewer system with viewing status
 */
export interface StudyRetrieveResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyViewerStatus: 'incomplete' | 'complete';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: Shared.OrgReference | null;
}

/**
 * A study entity in the Viewer system with viewing status
 */
export interface StudyUpdateResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyViewerStatus: 'incomplete' | 'complete';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: Shared.OrgReference | null;
}

/**
 * A study entity in the Viewer system with viewing status
 */
export interface StudyListResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyViewerStatus: 'incomplete' | 'complete';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: Shared.OrgReference | null;
}

/**
 * Response for cancelling a study in Viewer
 */
export interface StudyCancelResponse {
  success: boolean;

  message?: string;
}

/**
 * Response containing the generated reroute URL for a study in Viewer
 */
export interface StudyRerouteURLResponse {
  url: string;
}

/**
 * A study entity in the Viewer system with viewing status
 */
export interface StudyRetrieveByUidResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyViewerStatus: 'incomplete' | 'complete';

  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  metadata?: { [key: string]: string };

  /**
   * A reference to an organization with basic identifying information
   */
  org?: Shared.OrgReference | null;
}

/**
 * Response for uncancelling a study in Viewer
 */
export interface StudyUncancelResponse {
  success: boolean;

  message?: string;
}

export interface StudyCreateParams {
  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyInstanceUid: string;

  assignedTo?: string;

  metadata?: { [key: string]: string };

  orgId?: string;
}

export interface StudyUpdateParams {
  assignedTo?: string | null;

  metadata?: { [key: string]: string } | null;

  severity?: 'normal' | 'high' | 'stat';

  studyDescription?: string;

  studyViewerStatus?: 'incomplete' | 'complete';
}

export interface StudyListParams extends CursorStudiesParams {
  /**
   * Filter by assigned user ID (null = explicitly unassigned). Format:
   * usr\_<32-hex-chars>
   */
  assignedTo?: string | null;

  /**
   * Filter by cancellation status
   */
  isCancelled?: boolean | null;

  /**
   * Filter by study severity
   */
  severity?: 'normal' | 'high' | 'stat';

  /**
   * Filter by study description (contains match)
   */
  studyDescription?: string;

  /**
   * Filter by study viewer status
   */
  studyViewerStatus?: 'incomplete' | 'complete';
}

export interface StudyCancelParams {
  studyId?: string;

  studyInstanceUid?: string;
}

export interface StudyRerouteURLParams {
  studyId?: string;

  studyInstanceUid?: string;
}

export interface StudyUncancelParams {
  studyId?: string;

  studyInstanceUid?: string;
}

export declare namespace Studies {
  export {
    type StudyCreateResponse as StudyCreateResponse,
    type StudyRetrieveResponse as StudyRetrieveResponse,
    type StudyUpdateResponse as StudyUpdateResponse,
    type StudyListResponse as StudyListResponse,
    type StudyCancelResponse as StudyCancelResponse,
    type StudyRerouteURLResponse as StudyRerouteURLResponse,
    type StudyRetrieveByUidResponse as StudyRetrieveByUidResponse,
    type StudyUncancelResponse as StudyUncancelResponse,
    type StudyListResponsesCursorStudies as StudyListResponsesCursorStudies,
    type StudyCreateParams as StudyCreateParams,
    type StudyUpdateParams as StudyUpdateParams,
    type StudyListParams as StudyListParams,
    type StudyCancelParams as StudyCancelParams,
    type StudyRerouteURLParams as StudyRerouteURLParams,
    type StudyUncancelParams as StudyUncancelParams,
  };
}
