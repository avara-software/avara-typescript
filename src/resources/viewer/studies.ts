// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
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
  ): APIPromise<StudyListResponse> {
    return this._client.get('/v1/viewer/studies', { query, ...options });
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

  assignedTo?: StudyCreateResponse.AssignedTo | null;

  createdByApiKey?: StudyCreateResponse.CreatedByAPIKey | null;

  createdByUser?: StudyCreateResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  org?: StudyCreateResponse.Org | null;
}

export namespace StudyCreateResponse {
  export interface AssignedTo {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  export interface CreatedByAPIKey {
    apiKeyId: string;

    description: string;

    isViewerEnabled?: boolean;
  }

  export interface CreatedByUser {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  export interface Org {
    orgId: string;

    orgName: string;
  }
}

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

  assignedTo?: StudyRetrieveResponse.AssignedTo | null;

  createdByApiKey?: StudyRetrieveResponse.CreatedByAPIKey | null;

  createdByUser?: StudyRetrieveResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  org?: StudyRetrieveResponse.Org | null;
}

export namespace StudyRetrieveResponse {
  export interface AssignedTo {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  export interface CreatedByAPIKey {
    apiKeyId: string;

    description: string;

    isViewerEnabled?: boolean;
  }

  export interface CreatedByUser {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  export interface Org {
    orgId: string;

    orgName: string;
  }
}

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

  assignedTo?: StudyUpdateResponse.AssignedTo | null;

  createdByApiKey?: StudyUpdateResponse.CreatedByAPIKey | null;

  createdByUser?: StudyUpdateResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  org?: StudyUpdateResponse.Org | null;
}

export namespace StudyUpdateResponse {
  export interface AssignedTo {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  export interface CreatedByAPIKey {
    apiKeyId: string;

    description: string;

    isViewerEnabled?: boolean;
  }

  export interface CreatedByUser {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  export interface Org {
    orgId: string;

    orgName: string;
  }
}

export interface StudyListResponse {
  hasMore: boolean;

  studies: Array<StudyListResponse.Study>;

  cursor?: string;
}

export namespace StudyListResponse {
  export interface Study {
    cancelledAt: string | null;

    createdAt: string | null;

    isCancelled: boolean;

    severity: 'normal' | 'high' | 'stat';

    studyDescription: string;

    studyId: string;

    studyInstanceUid: string;

    studyViewerStatus: 'incomplete' | 'complete';

    updatedAt: string | null;

    assignedTo?: Study.AssignedTo | null;

    createdByApiKey?: Study.CreatedByAPIKey | null;

    createdByUser?: Study.CreatedByUser | null;

    metadata?: { [key: string]: string };

    org?: Study.Org | null;
  }

  export namespace Study {
    export interface AssignedTo {
      email: string;

      userId: string;

      firstName?: string;

      lastName?: string;

      middleName?: string;

      suffix1?: string;

      suffix2?: string;
    }

    export interface CreatedByAPIKey {
      apiKeyId: string;

      description: string;

      isViewerEnabled?: boolean;
    }

    export interface CreatedByUser {
      email: string;

      userId: string;

      firstName?: string;

      lastName?: string;

      middleName?: string;

      suffix1?: string;

      suffix2?: string;
    }

    export interface Org {
      orgId: string;

      orgName: string;
    }
  }
}

export interface StudyCancelResponse {
  success: boolean;

  message?: string;
}

export interface StudyRerouteURLResponse {
  url: string;
}

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

  assignedTo?: StudyRetrieveByUidResponse.AssignedTo | null;

  createdByApiKey?: StudyRetrieveByUidResponse.CreatedByAPIKey | null;

  createdByUser?: StudyRetrieveByUidResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  org?: StudyRetrieveByUidResponse.Org | null;
}

export namespace StudyRetrieveByUidResponse {
  export interface AssignedTo {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  export interface CreatedByAPIKey {
    apiKeyId: string;

    description: string;

    isViewerEnabled?: boolean;
  }

  export interface CreatedByUser {
    email: string;

    userId: string;

    firstName?: string;

    lastName?: string;

    middleName?: string;

    suffix1?: string;

    suffix2?: string;
  }

  export interface Org {
    orgId: string;

    orgName: string;
  }
}

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

export interface StudyListParams {
  /**
   * Filter by assigned user ID (null = explicitly unassigned). Format:
   * usr\_<32-hex-chars>
   */
  assignedTo?: string | null;

  /**
   * Base64 encoded cursor from previous response
   */
  cursor?: string;

  /**
   * Filter by cancellation status
   */
  isCancelled?: boolean | null;

  /**
   * Number of results to return (1-100)
   */
  limit?: number;

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
    type StudyCreateParams as StudyCreateParams,
    type StudyUpdateParams as StudyUpdateParams,
    type StudyListParams as StudyListParams,
    type StudyCancelParams as StudyCancelParams,
    type StudyRerouteURLParams as StudyRerouteURLParams,
    type StudyUncancelParams as StudyUncancelParams,
  };
}
