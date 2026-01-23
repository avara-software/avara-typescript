// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unwrap(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): UnwrapWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookKey : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as UnwrapWebhookEvent;
  }
}

/**
 * Webhook event sent when a report is completed. This is an asynchronous
 * notification - respond with a simple acknowledgment.
 */
export interface ReportDeliveredEvent {
  /**
   * Unique webhook event ID. Format: whe\_{32-hex-chars}
   */
  id: string;

  /**
   * Event payload containing report and study information
   */
  data: ReportDeliveredEvent.Data;

  /**
   * Event type identifier
   */
  type: 'report.delivered';
}

export namespace ReportDeliveredEvent {
  /**
   * Event payload containing report and study information
   */
  export interface Data {
    /**
     * Presigned URL for PDF download. Time-limited, typically valid for 1 hour.
     */
    presignedUrl: string;

    /**
     * Avara report ID. Format: rep\_{32-hex-chars}
     */
    reportId: string;

    /**
     * Avara study ID. Format: stu\_{32-hex-chars}
     */
    studyId: string;

    /**
     * Report plain text content (optional). Contains the full report text.
     */
    plainText?: string;
  }
}

/**
 * Response expected by Avara for report delivery webhook. Simple acknowledgment.
 */
export interface ReportDeliveredResponse {
  /**
   * Acknowledgment of receipt. Return true to confirm delivery.
   */
  success: boolean;
}

/**
 * Webhook event sent when Avara needs presigned URLs for DICOM images. This is a
 * synchronous webhook - you must respond with the URLs within the request timeout.
 */
export interface StudyAccessRequestedEvent {
  /**
   * Unique webhook event ID. Format: whe\_{32-hex-chars}
   */
  id: string;

  /**
   * Event payload containing study information
   */
  data: StudyAccessRequestedEvent.Data;

  /**
   * Event type identifier
   */
  type: 'study.access_requested';
}

export namespace StudyAccessRequestedEvent {
  /**
   * Event payload containing study information
   */
  export interface Data {
    /**
     * Avara study ID. Format: stu\_{32-hex-chars}
     */
    studyId: string;

    /**
     * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
     * '1.2.840.10008.5.1.4.1.1.2')
     */
    studyInstanceUid: string;
  }
}

/**
 * Response expected by Avara for study access webhook. Provide presigned URLs for
 * DICOM images.
 */
export interface StudyAccessRequestedResponse {
  /**
   * Whether access is authorized for this study
   */
  authorized: boolean;

  /**
   * Flat list of presigned URLs for DICOM images. Include all image URLs for the
   * study.
   */
  urls: Array<string>;

  /**
   * Error message if authorization failed or URLs cannot be provided
   */
  error?: string;
}

/**
 * Union of all Avara webhook event types. Use the 'type' field to discriminate
 * between event types. Events: study.access_requested (synchronous),
 * report.delivered (asynchronous).
 */
export type WebhookEvent = StudyAccessRequestedEvent | ReportDeliveredEvent;

/**
 * Webhook event sent when Avara needs presigned URLs for DICOM images. This is a
 * synchronous webhook - you must respond with the URLs within the request timeout.
 */
export type UnwrapWebhookEvent = StudyAccessRequestedEvent | ReportDeliveredEvent;

export declare namespace Webhooks {
  export {
    type ReportDeliveredEvent as ReportDeliveredEvent,
    type ReportDeliveredResponse as ReportDeliveredResponse,
    type StudyAccessRequestedEvent as StudyAccessRequestedEvent,
    type StudyAccessRequestedResponse as StudyAccessRequestedResponse,
    type WebhookEvent as WebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
