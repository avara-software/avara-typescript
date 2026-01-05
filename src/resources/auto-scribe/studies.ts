// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Studies extends APIResource {
  create(body: StudyCreateParams, options?: RequestOptions): APIPromise<StudyCreateResponse> {
    return this._client.post('/v1/autoScribe/studies', { body, ...options });
  }

  retrieve(studyID: string, options?: RequestOptions): APIPromise<StudyRetrieveResponse> {
    return this._client.get(path`/v1/autoScribe/studies/${studyID}`, options);
  }

  update(
    studyID: string,
    body: StudyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUpdateResponse> {
    return this._client.patch(path`/v1/autoScribe/studies/${studyID}`, { body, ...options });
  }

  list(
    query: StudyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyListResponse> {
    return this._client.get('/v1/autoScribe/studies', { query, ...options });
  }

  cancel(
    body: StudyCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyCancelResponse> {
    return this._client.post('/v1/autoScribe/studies/cancel', { body, ...options });
  }

  rerouteURL(body: StudyRerouteURLParams, options?: RequestOptions): APIPromise<StudyRerouteURLResponse> {
    return this._client.post('/v1/autoScribe/studies/reroute-url', { body, ...options });
  }

  retrieveByUid(studyInstanceUid: string, options?: RequestOptions): APIPromise<StudyRetrieveByUidResponse> {
    return this._client.get(path`/v1/autoScribe/studies/by-uid/${studyInstanceUid}`, options);
  }

  uncancel(
    body: StudyUncancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUncancelResponse> {
    return this._client.post('/v1/autoScribe/studies/uncancel', { body, ...options });
  }

  viewerOnlyRerouteURL(
    body: StudyViewerOnlyRerouteURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyViewerOnlyRerouteURLResponse> {
    return this._client.post('/v1/autoScribe/studies/viewer-only-reroute-url', { body, ...options });
  }
}

export interface StudyCreateResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  reportMetadata: StudyCreateResponse.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  updatedAt: string | null;

  assignedTo?: StudyCreateResponse.AssignedTo | null;

  createdByApiKey?: StudyCreateResponse.CreatedByAPIKey | null;

  createdByUser?: StudyCreateResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  org?: StudyCreateResponse.Org | null;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;

  reportIds?: Array<StudyCreateResponse.ReportID>;
}

export namespace StudyCreateResponse {
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }

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

  export interface ReportID {
    reportId: string;

    status: 'in_progress' | 'completed';
  }
}

export interface StudyRetrieveResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  reportMetadata: StudyRetrieveResponse.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  updatedAt: string | null;

  assignedTo?: StudyRetrieveResponse.AssignedTo | null;

  createdByApiKey?: StudyRetrieveResponse.CreatedByAPIKey | null;

  createdByUser?: StudyRetrieveResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  org?: StudyRetrieveResponse.Org | null;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;

  reportIds?: Array<StudyRetrieveResponse.ReportID>;
}

export namespace StudyRetrieveResponse {
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }

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

  export interface ReportID {
    reportId: string;

    status: 'in_progress' | 'completed';
  }
}

export interface StudyUpdateResponse {
  cancelledAt: string | null;

  createdAt: string | null;

  isCancelled: boolean;

  reportMetadata: StudyUpdateResponse.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  updatedAt: string | null;

  assignedTo?: StudyUpdateResponse.AssignedTo | null;

  createdByApiKey?: StudyUpdateResponse.CreatedByAPIKey | null;

  createdByUser?: StudyUpdateResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  org?: StudyUpdateResponse.Org | null;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;

  reportIds?: Array<StudyUpdateResponse.ReportID>;
}

export namespace StudyUpdateResponse {
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }

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

  export interface ReportID {
    reportId: string;

    status: 'in_progress' | 'completed';
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

    reportMetadata: Study.ReportMetadata;

    severity: 'normal' | 'high' | 'stat';

    studyDescription: string;

    studyId: string;

    studyInstanceUid: string;

    studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

    updatedAt: string | null;

    assignedTo?: Study.AssignedTo | null;

    createdByApiKey?: Study.CreatedByAPIKey | null;

    createdByUser?: Study.CreatedByUser | null;

    metadata?: { [key: string]: string };

    org?: Study.Org | null;

    priorReportTexts?: Array<string>;

    priorStudyIds?: Array<string>;

    reportIds?: Array<Study.ReportID>;
  }

  export namespace Study {
    export interface ReportMetadata {
      age?: string;

      dateOfBirth?: string;

      facilityName?: string;

      height?: ReportMetadata.Height;

      mrn?: string;

      patientName?: string;

      referringPhysicianName?: string;

      scanDate?: string;

      scanTime?: string;

      scanType?: string;

      sex?: 'male' | 'female' | 'other';

      weight?: ReportMetadata.Weight;
    }

    export namespace ReportMetadata {
      export interface Height {
        unit: 'in' | 'cm';

        value: number;
      }

      export interface Weight {
        unit: 'lbs' | 'kg';

        value: number;
      }
    }

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

    export interface ReportID {
      reportId: string;

      status: 'in_progress' | 'completed';
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

  reportMetadata: StudyRetrieveByUidResponse.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyId: string;

  studyInstanceUid: string;

  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  updatedAt: string | null;

  assignedTo?: StudyRetrieveByUidResponse.AssignedTo | null;

  createdByApiKey?: StudyRetrieveByUidResponse.CreatedByAPIKey | null;

  createdByUser?: StudyRetrieveByUidResponse.CreatedByUser | null;

  metadata?: { [key: string]: string };

  org?: StudyRetrieveByUidResponse.Org | null;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;

  reportIds?: Array<StudyRetrieveByUidResponse.ReportID>;
}

export namespace StudyRetrieveByUidResponse {
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }

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

  export interface ReportID {
    reportId: string;

    status: 'in_progress' | 'completed';
  }
}

export interface StudyUncancelResponse {
  success: boolean;

  message?: string;
}

export interface StudyViewerOnlyRerouteURLResponse {
  url: string;
}

export interface StudyCreateParams {
  reportMetadata: StudyCreateParams.ReportMetadata;

  severity: 'normal' | 'high' | 'stat';

  studyDescription: string;

  studyInstanceUid: string;

  assignedTo?: string;

  metadata?: { [key: string]: string };

  orgId?: string;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;
}

export namespace StudyCreateParams {
  export interface ReportMetadata {
    age?: string;

    dateOfBirth?: string;

    facilityName?: string;

    height?: ReportMetadata.Height;

    mrn?: string;

    patientName?: string;

    referringPhysicianName?: string;

    scanDate?: string;

    scanTime?: string;

    scanType?: string;

    sex?: 'male' | 'female' | 'other';

    weight?: ReportMetadata.Weight;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }
}

export interface StudyUpdateParams {
  assignedTo?: string | null;

  metadata?: { [key: string]: string } | null;

  orgId?: string | null;

  priorReportTexts?: Array<string> | null;

  priorStudyIds?: Array<string> | null;

  reportMetadata?: StudyUpdateParams.ReportMetadata;

  severity?: 'normal' | 'high' | 'stat';

  studyDescription?: string;
}

export namespace StudyUpdateParams {
  export interface ReportMetadata {
    age?: string | null;

    dateOfBirth?: string | null;

    facilityName?: string | null;

    height?: ReportMetadata.Height | null;

    mrn?: string | null;

    patientName?: string | null;

    referringPhysicianName?: string | null;

    scanDate?: string | null;

    scanTime?: string | null;

    scanType?: string | null;

    sex?: 'male' | 'female' | 'other' | null;

    weight?: ReportMetadata.Weight | null;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

      value: number;
    }
  }
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
   * Filter by report status(es)
   */
  studyReportStatus?: Array<'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active'>;
}

export interface StudyCancelParams {
  studyId?: string;

  studyInstanceUid?: string;
}

export interface StudyRerouteURLParams {
  assignedToUserId: string;

  studyId?: string;

  studyInstanceUid?: string;
}

export interface StudyUncancelParams {
  studyId?: string;

  studyInstanceUid?: string;
}

export interface StudyViewerOnlyRerouteURLParams {
  studyId?: string;

  studyInstanceUid?: string;

  userId?: string;
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
    type StudyViewerOnlyRerouteURLResponse as StudyViewerOnlyRerouteURLResponse,
    type StudyCreateParams as StudyCreateParams,
    type StudyUpdateParams as StudyUpdateParams,
    type StudyListParams as StudyListParams,
    type StudyCancelParams as StudyCancelParams,
    type StudyRerouteURLParams as StudyRerouteURLParams,
    type StudyUncancelParams as StudyUncancelParams,
    type StudyViewerOnlyRerouteURLParams as StudyViewerOnlyRerouteURLParams,
  };
}
