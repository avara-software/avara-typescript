// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reports extends APIResource {
  list(
    query: ReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportListResponse> {
    return this._client.get('/v1/autoScribe/reports', { query, ...options });
  }

  addendum(reportID: string, options?: RequestOptions): APIPromise<ReportAddendumResponse> {
    return this._client.post(path`/v1/autoScribe/reports/${reportID}/addendum`, options);
  }

  cancelAddendum(reportID: string, options?: RequestOptions): APIPromise<ReportCancelAddendumResponse> {
    return this._client.post(path`/v1/autoScribe/reports/${reportID}/cancel-addendum`, options);
  }

  pdf(
    query: ReportPdfParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportPdfResponse> {
    return this._client.get('/v1/autoScribe/reports/pdf', { query, ...options });
  }

  text(
    query: ReportTextParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportTextResponse> {
    return this._client.get('/v1/autoScribe/reports/text', { query, ...options });
  }
}

export interface ReportListResponse {
  reports: Array<ReportListResponse.Report>;

  studyId: string;

  studyInstanceUid: string;
}

export namespace ReportListResponse {
  export interface Report {
    createdAt: string | null;

    isAddendum: boolean;

    reportId: string;

    signedAt: string | null;

    snapshotMetadata: Report.SnapshotMetadata;

    status: 'in_progress' | 'completed';

    studyId: string;

    updatedAt: string | null;

    userId: string;

    reportPlainText?: string;
  }

  export namespace Report {
    export interface SnapshotMetadata {
      age?: string;

      dateOfBirth?: string;

      facilityName?: string;

      height?: SnapshotMetadata.Height;

      mrn?: string;

      patientName?: string;

      referringPhysicianName?: string;

      scanDate?: string;

      scanTime?: string;

      scanType?: string;

      sex?: 'male' | 'female' | 'other';

      weight?: SnapshotMetadata.Weight;
    }

    export namespace SnapshotMetadata {
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
}

export interface ReportAddendumResponse {
  success: boolean;

  message?: string;
}

export interface ReportCancelAddendumResponse {
  success: boolean;

  message?: string;
}

export type ReportPdfResponse =
  | ReportPdfResponse.SingleReportPdfResponse
  | ReportPdfResponse.ListReportsPdfResponse;

export namespace ReportPdfResponse {
  export interface SingleReportPdfResponse {
    presignedUrl: string;

    reportId: string;

    snapshotMetadata: SingleReportPdfResponse.SnapshotMetadata;

    studyId: string;

    studyInstanceUid: string;
  }

  export namespace SingleReportPdfResponse {
    export interface SnapshotMetadata {
      age?: string;

      dateOfBirth?: string;

      facilityName?: string;

      height?: SnapshotMetadata.Height;

      mrn?: string;

      patientName?: string;

      referringPhysicianName?: string;

      scanDate?: string;

      scanTime?: string;

      scanType?: string;

      sex?: 'male' | 'female' | 'other';

      weight?: SnapshotMetadata.Weight;
    }

    export namespace SnapshotMetadata {
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

  export interface ListReportsPdfResponse {
    reports: Array<ListReportsPdfResponse.Report>;

    studyId: string;

    studyInstanceUid: string;
  }

  export namespace ListReportsPdfResponse {
    export interface Report {
      presignedUrl: string;

      reportId: string;

      snapshotMetadata: Report.SnapshotMetadata;

      studyId: string;

      studyInstanceUid: string;
    }

    export namespace Report {
      export interface SnapshotMetadata {
        age?: string;

        dateOfBirth?: string;

        facilityName?: string;

        height?: SnapshotMetadata.Height;

        mrn?: string;

        patientName?: string;

        referringPhysicianName?: string;

        scanDate?: string;

        scanTime?: string;

        scanType?: string;

        sex?: 'male' | 'female' | 'other';

        weight?: SnapshotMetadata.Weight;
      }

      export namespace SnapshotMetadata {
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
  }
}

export type ReportTextResponse =
  | ReportTextResponse.SingleReportTextResponse
  | ReportTextResponse.ListReportsTextResponse;

export namespace ReportTextResponse {
  export interface SingleReportTextResponse {
    reportId: string;

    snapshotMetadata: SingleReportTextResponse.SnapshotMetadata;

    studyId: string;

    studyInstanceUid: string;

    plainText?: string;
  }

  export namespace SingleReportTextResponse {
    export interface SnapshotMetadata {
      age?: string;

      dateOfBirth?: string;

      facilityName?: string;

      height?: SnapshotMetadata.Height;

      mrn?: string;

      patientName?: string;

      referringPhysicianName?: string;

      scanDate?: string;

      scanTime?: string;

      scanType?: string;

      sex?: 'male' | 'female' | 'other';

      weight?: SnapshotMetadata.Weight;
    }

    export namespace SnapshotMetadata {
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

  export interface ListReportsTextResponse {
    reports: Array<ListReportsTextResponse.Report>;

    studyId: string;

    studyInstanceUid: string;
  }

  export namespace ListReportsTextResponse {
    export interface Report {
      reportId: string;

      snapshotMetadata: Report.SnapshotMetadata;

      studyId: string;

      studyInstanceUid: string;

      plainText?: string;
    }

    export namespace Report {
      export interface SnapshotMetadata {
        age?: string;

        dateOfBirth?: string;

        facilityName?: string;

        height?: SnapshotMetadata.Height;

        mrn?: string;

        patientName?: string;

        referringPhysicianName?: string;

        scanDate?: string;

        scanTime?: string;

        scanType?: string;

        sex?: 'male' | 'female' | 'other';

        weight?: SnapshotMetadata.Weight;
      }

      export namespace SnapshotMetadata {
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
  }
}

export interface ReportListParams {
  /**
   * Study ID. Format: stu\_<32-hex-chars>
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID
   */
  studyInstanceUid?: string;
}

export interface ReportPdfParams {
  /**
   * Report ID. Format: rep\_<32-hex-chars>
   */
  reportId?: string;

  /**
   * Study ID. Format: stu\_<32-hex-chars>
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID
   */
  studyInstanceUid?: string;
}

export interface ReportTextParams {
  /**
   * Report ID. Format: rep\_<32-hex-chars>
   */
  reportId?: string;

  /**
   * Study ID. Format: stu\_<32-hex-chars>
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID
   */
  studyInstanceUid?: string;
}

export declare namespace Reports {
  export {
    type ReportListResponse as ReportListResponse,
    type ReportAddendumResponse as ReportAddendumResponse,
    type ReportCancelAddendumResponse as ReportCancelAddendumResponse,
    type ReportPdfResponse as ReportPdfResponse,
    type ReportTextResponse as ReportTextResponse,
    type ReportListParams as ReportListParams,
    type ReportPdfParams as ReportPdfParams,
    type ReportTextParams as ReportTextParams,
  };
}
