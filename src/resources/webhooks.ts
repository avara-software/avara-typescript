// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { Webhook } from 'standardwebhooks';

/**
 * Webhook event handling utilities for Avara.
 *
 * Avara sends webhook events to your configured endpoint with Standard Webhooks headers
 * (`webhook-id`, `webhook-timestamp`, `webhook-signature`) for signature verification.
 *
 * ## Event Types
 *
 * - **`study.access_requested`**: Synchronous - you must return presigned DICOM image URLs within the request timeout
 * - **`report.delivered`**: Asynchronous notification when a report is completed
 *
 * ## TypeScript
 *
 * ```typescript
 * import Avara from 'avara';
 * import express from 'express';
 *
 * const client = new Avara({
 *   webhookKey: process.env.AVARA_WEBHOOK_KEY, // From your Avara dashboard
 * });
 *
 * app.post('/webhooks/avara', express.raw({ type: 'application/json' }), (req, res) => {
 *   try {
 *     const event = client.webhooks.unwrap(req.body.toString(), req.headers);
 *
 *     if (event.type === 'report.delivered') {
 *       console.log('Report ready:', event.data.reportId);
 *       console.log('PDF URL:', event.data.presignedUrl);
 *       return res.json({ success: true });
 *     }
 *
 *     if (event.type === 'study.access_requested') {
 *       // Fetch presigned URLs from your PACS/storage
 *       const urls = await getPresignedUrls(event.data.studyInstanceUid);
 *       return res.json({ authorized: true, urls });
 *     }
 *   } catch (err) {
 *     console.error('Webhook error:', err);
 *     return res.status(400).json({ error: 'Invalid webhook' });
 *   }
 * });
 * ```
 *
 * ## Python
 *
 * ```python
 * import os
 * from flask import Flask, request, jsonify
 * from avara import Avara
 *
 * app = Flask(__name__)
 * client = Avara(webhook_key=os.environ['AVARA_WEBHOOK_KEY'])
 *
 * @app.route('/webhooks/avara', methods=['POST'])
 * def handle_webhook():
 *     try:
 *         event = client.webhooks.unwrap(request.data, dict(request.headers))
 *
 *         if event.type == 'report.delivered':
 *             print(f"Report ready: {event.data.report_id}")
 *             print(f"PDF URL: {event.data.presigned_url}")
 *             return jsonify({'success': True})
 *
 *         if event.type == 'study.access_requested':
 *             # Fetch presigned URLs from your PACS/storage
 *             urls = get_presigned_urls(event.data.study_instance_uid)
 *             return jsonify({'authorized': True, 'urls': urls})
 *
 *     except Exception as e:
 *         print(f"Webhook error: {e}")
 *         return jsonify({'error': 'Invalid webhook'}), 400
 * ```
 *
 * ## Verification
 *
 * The `unwrap()` method verifies the webhook signature using your `webhookKey` before parsing.
 * This ensures the request came from Avara and wasn't tampered with.
 */
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
