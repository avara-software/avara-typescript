// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Webhooks extends APIResource {
  unwrap(body: string): UnwrapWebhookEvent {
    return JSON.parse(body) as UnwrapWebhookEvent;
  }
}

export interface StudyAccessRequestedWebhookEvent {
  /**
   * Unique webhook event ID (e.g., whe_1234567890abcdef1234567890abcdef)
   */
  id: string;

  data: StudyAccessRequestedWebhookEvent.Data;

  type: 'study.access_requested';
}

export namespace StudyAccessRequestedWebhookEvent {
  export interface Data {
    /**
     * Avara study ID (e.g., stu_1234567890abcdef1234567890abcdef)
     */
    studyId: string;

    /**
     * DICOM Study Instance UID
     */
    studyInstanceUid: string;
  }
}

export interface ReportDeliveredWebhookEvent {
  /**
   * Unique webhook event ID (e.g., whe_1234567890abcdef1234567890abcdef)
   */
  id: string;

  data: ReportDeliveredWebhookEvent.Data;

  type: 'report.delivered';
}

export namespace ReportDeliveredWebhookEvent {
  export interface Data {
    /**
     * Presigned URL for PDF download
     */
    presignedUrl: string;

    /**
     * Avara report ID (e.g., rep_1234567890abcdef1234567890abcdef)
     */
    reportId: string;

    /**
     * Avara study ID (e.g., stu_1234567890abcdef1234567890abcdef)
     */
    studyId: string;

    /**
     * Report plain text content (optional)
     */
    plainText?: string;
  }
}

export type UnwrapWebhookEvent = StudyAccessRequestedWebhookEvent | ReportDeliveredWebhookEvent;

export declare namespace Webhooks {
  export {
    type StudyAccessRequestedWebhookEvent as StudyAccessRequestedWebhookEvent,
    type ReportDeliveredWebhookEvent as ReportDeliveredWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
