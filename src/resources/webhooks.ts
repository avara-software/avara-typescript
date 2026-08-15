// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unsafeUnwrap(body: string): UnsafeUnwrapWebhookEvent {
    return JSON.parse(body) as UnsafeUnwrapWebhookEvent;
  }

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
 * Inline text document for clinical history synthesize
 */
export interface ClinicalContextEnrichmentDocument {
  /**
   * Text chunks for the document
   */
  content: Array<string>;

  fileName: string;
}

/**
 * Remote document URL (https) for Avara to fetch/summarize
 */
export interface ClinicalContextEnrichmentDocumentURL {
  /**
   * Must use https://
   */
  url: string;

  fileName?: string;
}

/**
 * External prior report metadata and text for clinical context
 */
export interface ClinicalContextEnrichmentPriorReport {
  /**
   * Full prior report text
   */
  reportText: string;

  externalStudyId?: string;

  modality?: string;

  /**
   * YYYY-MM-DD
   */
  studyDate?: string;

  studyDescription?: string;
}

/**
 * Soft synchronous webhook sent when AutoScribe needs clinical context from the
 * partner EHR. Failures / timeouts / invalid bodies are treated as empty
 * enrichment.
 */
export interface ClinicalContextEnrichmentRequestedEvent {
  /**
   * Unique webhook event ID. Format: whe\_{32-hex-chars}
   */
  id: string;

  /**
   * Event payload for soft clinical context enrichment when AutoScribe needs EHR
   * context for a study
   */
  data: ClinicalContextEnrichmentRequestedEventData;

  /**
   * Event type identifier
   */
  type: 'clinical_context.enrichment_requested';
}

/**
 * Event payload for soft clinical context enrichment when AutoScribe needs EHR
 * context for a study
 */
export interface ClinicalContextEnrichmentRequestedEventData {
  /**
   * Clinic UUID
   */
  clinicId: string;

  /**
   * Raw study UUID v4 (not branded stu\_…)
   */
  studyId: string;

  /**
   * DICOM Study Instance UID
   */
  studyInstanceUid: string;

  /**
   * External patient identifier when available
   */
  externalPatientId?: string;

  /**
   * Medical record number when available
   */
  mrn?: string;
}

/**
 * Soft enrichment response. No authorized field — return any subset of fields
 * (including {}).
 */
export interface ClinicalContextEnrichmentRequestedResponse {
  clinicalIndication?: string;

  documents?: Array<ClinicalContextEnrichmentDocument>;

  documentUrls?: Array<ClinicalContextEnrichmentDocumentURL>;

  priorReports?: Array<ClinicalContextEnrichmentPriorReport>;

  technologistNotes?: Array<string>;

  technologistTechnique?: string;
}

/**
 * Webhook event sent when Avara needs presigned URLs for an ephemeral viewer
 * session. This is a synchronous webhook — you must respond with the URLs within
 * the request timeout. There is no Avara study; use retrievalId (and optional
 * options) to resolve images.
 */
export interface EphemeralAccessRequestedEvent {
  /**
   * Unique webhook event ID. Format: whe\_{32-hex-chars}
   */
  id: string;

  /**
   * Event payload for an ephemeral viewer session. retrievalId is the customer
   * handle from mint. options is echoed verbatim when present; Avara does not read
   * or edit it.
   */
  data: EphemeralAccessRequestedEventData;

  /**
   * Event type identifier
   */
  type: 'ephemeral.access_requested';
}

/**
 * Event payload for an ephemeral viewer session. retrievalId is the customer
 * handle from mint. options is echoed verbatim when present; Avara does not read
 * or edit it.
 */
export interface EphemeralAccessRequestedEventData {
  /**
   * Opaque customer handle for this view session. Not an Avara study ID.
   */
  retrievalId: string;

  /**
   * Optional JSON object echoed verbatim from mint. Avara does not read or edit it.
   * Examples: studyInstanceUids or internal ids for multi-study reads. Not for URLs
   * or manifests.
   */
  options?: { [key: string]: unknown };
}

/**
 * Synchronous response with presigned DICOM URLs and optionally non-DICOM media.
 * Optionally include a manifests array (one study per item) to improve progressive
 * loading of legacy DICOM; it is not required.
 */
export interface EphemeralAccessRequestedResponse {
  /**
   * Whether access is authorized for this ephemeral session
   */
  authorized: boolean;

  /**
   * Flat list of presigned URLs for DICOM images across the session.
   */
  urls: Array<string>;

  /**
   * Error message if authorization failed or URLs cannot be provided
   */
  error?: string;

  /**
   * Optional sidecars, one study per item (an array, not a single object). Not
   * required — omit if you do not have them. Recommended when you can provide them,
   * especially for very large or multi-study legacy DICOM. Enables progressive
   * loading so readers can scroll before every file is parsed. Invalid or incomplete
   * values are ignored; URLs still load.
   */
  manifests?: Array<StudyAccessRequestedManifest>;

  /**
   * Optional presigned URLs for non-DICOM media (images, PDFs, videos).
   */
  mediaUrls?: Array<StudyAccessRequestedMediaURL>;
}

/**
 * One worklist item shaped for direct DICOM Dataset construction on the on-prem
 * box. Field names are PascalCase DICOM-style intentionally.
 */
export interface ModalityWorklistItem {
  AccessionNumber: string;

  Modality: string;

  PatientBirthDate: string;

  PatientID: string;

  PatientName: string;

  PatientSex: string;

  /**
   * Patient size; empty string allowed
   */
  PatientSize: string;

  /**
   * Patient weight; empty string allowed
   */
  PatientWeight: string;

  ProtocolName: string;

  RequestedProcedureDescription: string;

  /**
   * Scheduled procedure steps for this worklist item. Most appointments/studies have
   * a single step; include additional steps only when the RIS schedules multiple.
   */
  ScheduledProcedureStepSequence: Array<ModalityWorklistScheduledStep>;

  StudyDescription: string;

  /**
   * Required from partner RIS today; do not omit.
   */
  StudyInstanceUID: string;
}

/**
 * Webhook event sent when an on-prem modality issues a C-FIND MWL. This is a
 * synchronous webhook - you must respond with authorized + items within the
 * request timeout.
 */
export interface ModalityWorklistRequestedEvent {
  /**
   * Unique webhook event ID. Format: whe\_{32-hex-chars}
   */
  id: string;

  /**
   * Event payload for a modality worklist (C-FIND MWL) request
   */
  data: ModalityWorklistRequestedEventData;

  /**
   * Event type identifier
   */
  type: 'modality_worklist.requested';
}

/**
 * Event payload for a modality worklist (C-FIND MWL) request
 */
export interface ModalityWorklistRequestedEventData {
  /**
   * Calling AE title from the modality
   */
  callingAe: string;

  /**
   * Clinic UUID that owns the modality / worklist query
   */
  clinicId: string;

  /**
   * Inclusive worklist window end date (YYYY-MM-DD)
   */
  dateEnd: string;

  /**
   * Inclusive worklist window start date (YYYY-MM-DD)
   */
  dateStart: string;

  /**
   * Source IP observed by Avara for the modality request
   */
  sourceIp: string;

  /**
   * Present when the modality C-FIND included a modality filter
   */
  modality?: string;
}

/**
 * Response expected by Avara for modality worklist webhook. authorized:false
 * surfaces as worklist failure; authorized:true with empty items means no
 * scheduled exams.
 */
export interface ModalityWorklistRequestedResponse {
  /**
   * Whether the worklist query is authorized
   */
  authorized: boolean;

  /**
   * Worklist items for the requested date window
   */
  items: Array<ModalityWorklistItem>;

  /**
   * Error message if authorization failed
   */
  error?: string;
}

/**
 * Scheduled procedure step used to construct DICOM MWL datasets
 */
export interface ModalityWorklistScheduledStep {
  /**
   * Modality for this scheduled step
   */
  Modality: string;

  /**
   * Human-readable description of the scheduled step
   */
  ScheduledProcedureStepDescription: string;

  /**
   * Scheduled procedure step identifier
   */
  ScheduledProcedureStepID: string;

  /**
   * Scheduled start date (DICOM DA-compatible string)
   */
  ScheduledProcedureStepStartDate: string;

  /**
   * Scheduled start time (DICOM TM-compatible string)
   */
  ScheduledProcedureStepStartTime: string;
}

/**
 * Soft synchronous webhook sent after Avara PACS seeds a study so the partner can
 * enrich demographics and report headers. Failures / timeouts / invalid bodies are
 * treated as empty enrichment.
 */
export interface PatientStudyEnrichmentRequestedEvent {
  /**
   * Unique webhook event ID. Format: whe\_{32-hex-chars}
   */
  id: string;

  /**
   * Event payload for soft patient/study enrichment after Avara PACS seeds a study
   */
  data: PatientStudyEnrichmentRequestedEventData;

  /**
   * Event type identifier
   */
  type: 'patient_study.enrichment_requested';
}

/**
 * Event payload for soft patient/study enrichment after Avara PACS seeds a study
 */
export interface PatientStudyEnrichmentRequestedEventData {
  /**
   * Clinic UUID
   */
  clinicId: string;

  /**
   * DICOM Study Instance UID
   */
  studyInstanceUid: string;

  /**
   * Accession number from DICOM when available
   */
  accessionNumber?: string;

  /**
   * Patient ID from DICOM when available
   */
  patientId?: string;
}

/**
 * Soft enrichment response. No authorized field — return any subset of fields
 * (including {}). Avara merges per-field with DICOM light metadata then defaults.
 */
export interface PatientStudyEnrichmentRequestedResponse {
  /**
   * YYYY-MM-DD
   */
  dateOfBirth?: string;

  externalPatientId?: string;

  facilityName?: string;

  height?: PatientStudyEnrichmentRequestedResponse.Height;

  mrn?: string;

  patientName?: string;

  procedure?: string;

  referringPhysicianName?: string;

  severity?: 'normal' | 'high' | 'stat';

  sex?: 'male' | 'female' | 'other';

  /**
   * YYYY-MM-DD
   */
  studyDate?: string;

  studyDescription?: string;

  /**
   * HH:MM or HH:MM:SS[.fff]; Avara may truncate to HH:MM
   */
  studyTime?: string;

  weight?: PatientStudyEnrichmentRequestedResponse.Weight;
}

export namespace PatientStudyEnrichmentRequestedResponse {
  export interface Height {
    unit: 'in' | 'cm';

    value: number;
  }

  export interface Weight {
    unit: 'lbs' | 'kg';

    value: number;
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
  data: ReportDeliveredEventData;

  /**
   * Event type identifier
   */
  type: 'report.delivered';
}

/**
 * Event payload containing report and study information
 */
export interface ReportDeliveredEventData {
  /**
   * Whether the report was marked critical at sign-off.
   */
  isCritical: boolean;

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
 * Webhook event sent when Avara needs presigned UPLOAD URLs for a secondary
 * capture DICOM. This is a synchronous webhook - you must respond with the upload
 * URLs within the request timeout.
 */
export interface SecondaryCaptureAccessRequestedEvent {
  /**
   * Unique webhook event ID. Format: whe\_{32-hex-chars}
   */
  id: string;

  /**
   * Event payload containing study + (optional) series/SOP information for a
   * secondary capture upload
   */
  data: SecondaryCaptureAccessRequestedEventData;

  /**
   * Event type identifier
   */
  type: 'secondary_capture.access_requested';
}

/**
 * Event payload containing study + (optional) series/SOP information for a
 * secondary capture upload
 */
export interface SecondaryCaptureAccessRequestedEventData {
  /**
   * Avara study ID. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;

  /**
   * DICOM Series Instance UID generated for the new secondary capture series (when
   * available).
   */
  seriesInstanceUid?: string;

  /**
   * DICOM SOP Instance UID generated for the new secondary capture object (when
   * available).
   */
  sopInstanceUid?: string;
}

/**
 * Response expected by Avara for the secondary capture webhook. Provide presigned
 * PUT URLs the viewer will upload the DICOM to.
 */
export interface SecondaryCaptureAccessRequestedResponse {
  /**
   * Whether the secondary capture upload is authorized for this study
   */
  authorized: boolean;

  /**
   * Presigned PUT URLs for uploading the secondary capture DICOM. The viewer uploads
   * the same object to every URL.
   */
  uploadUrls: Array<string>;

  /**
   * Optional content creator name. Avara derives this server-side; this field is
   * ignored if provided.
   */
  contentCreatorName?: string;

  /**
   * Error message if authorization failed or upload URLs cannot be provided
   */
  error?: string;
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
  data: StudyAccessRequestedEventData;

  /**
   * Event type identifier
   */
  type: 'study.access_requested';
}

/**
 * Event payload containing study information
 */
export interface StudyAccessRequestedEventData {
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

/**
 * Optional sidecar for this one study (one object, not an array). Not required —
 * omit if you do not have it. Recommended when you can provide it, especially for
 * very large studies. Enables progressive loading of legacy multi-SOP DICOM so
 * readers can scroll before every file is parsed. Include only this study. Series
 * you cannot describe can be left out. Invalid or incomplete values are ignored;
 * URLs still load.
 */
export interface StudyAccessRequestedManifest {
  /**
   * Planable series in this study. At least one must survive validation.
   */
  series: Array<StudyAccessRequestedManifestSeries>;

  /**
   * DICOM Study Instance UID for this study. Non-empty string. Must match the study
   * being requested.
   */
  studyInstanceUID: string;
}

/**
 * One series in the optional study manifest. Series you cannot describe can be
 * left out. Secondary capture is not necessary. Enhanced multi-frame series
 * already load progressively without this sidecar. A series with no surviving SOPs
 * is dropped.
 */
export interface StudyAccessRequestedManifestSeries {
  /**
   * Non-empty DICOM modality. Common: CT, MR, CR, DX, US, XA, PT, NM, MG. Secondary
   * capture (SC) is not necessary.
   */
  modality: string;

  /**
   * Non-empty display string shown in the viewer sidebar.
   */
  seriesDescription: string;

  /**
   * DICOM Series Instance UID. Non-empty string.
   */
  seriesInstanceUID: string;

  /**
   * Series number. String or number (1 or "1").
   */
  seriesNumber: string | number;

  /**
   * SOPs in this series. At least one must survive validation.
   */
  sops: Array<StudyAccessRequestedManifestSop>;
}

/**
 * One SOP in the optional study manifest. Identity (sopInstanceUID, sopClassUID)
 * is always required. For image SOPs, also include rows, columns, bitsAllocated,
 * photometricInterpretation, and samplesPerPixel or that SOP is dropped. SR / PR /
 * KO do not need geometry. Wrong types or missing required fields drop that SOP
 * only; sibling SOPs and URLs still load.
 */
export interface StudyAccessRequestedManifestSop {
  /**
   * DICOM SOP Class UID. Progressive load uses legacy single-frame image classes.
   * Common: CT 1.2.840.10008.5.1.4.1.1.2, MR 1.2.840.10008.5.1.4.1.1.4, plus CR / DX
   * / US / XA / PT. Enhanced multi-frame classes already load progressively from the
   * single SOP — the sidecar is not used for them. SR / PR / KO do not need
   * geometry.
   */
  sopClassUID: string;

  /**
   * DICOM SOP Instance UID. Non-empty string.
   */
  sopInstanceUID: string;

  /**
   * Required on image SOPs. Planner uses 8, 16, or 32 (or the float flags). Typical
   * CT/MR: 16.
   */
  bitsAllocated?: number;

  /**
   * Optional. Typical CT/MR: 12 or 16.
   */
  bitsStored?: number;

  /**
   * Image columns. Required on image SOPs. Positive integer. Common: 256, 512, 1024.
   */
  columns?: number;

  /**
   * Optional. Typical 16-bit: 15.
   */
  highBit?: number;

  /**
   * Slice order (DICOM Instance Number). Omit or 0 if unknown; UID is the tie-break.
   */
  instanceNumber?: number;

  /**
   * Set true only if pixel data is 64-bit float.
   */
  isDoubleFloatPixelData?: boolean;

  /**
   * Set true only if pixel data is 32-bit float.
   */
  isFloatPixelData?: boolean;

  /**
   * 1 for single-frame files. Greater than 1 only if this SOP is multi-frame.
   */
  numberOfFrames?: number;

  /**
   * Required non-empty string on image SOPs. Common: MONOCHROME2 (CT/MR),
   * MONOCHROME1 (often MG, inverted), RGB, PALETTE COLOR, YBR_FULL, YBR_FULL_422.
   * Unknown strings are kept and treated as mono unless samplesPerPixel is 3. Wrong
   * type (number/null) drops that SOP from optimized path.
   */
  photometricInterpretation?: string;

  /**
   * 0 unsigned, 1 signed. Typical CT: 0.
   */
  pixelRepresentation?: number;

  /**
   * Optional. Typical CT: -1024. Safe to omit.
   */
  rescaleIntercept?: number;

  /**
   * Optional. Typical CT: 1. Safe to omit.
   */
  rescaleSlope?: number;

  /**
   * Image rows. Required on image SOPs. Positive integer. Common: 256, 512, 1024.
   */
  rows?: number;

  /**
   * Required on image SOPs. 1 grayscale, 3 color. 3 is treated as color even if
   * photometric is unusual.
   */
  samplesPerPixel?: number;
}

/**
 * Presigned URL for non-DICOM media (images, PDFs, videos)
 */
export interface StudyAccessRequestedMediaURL {
  /**
   * MIME type of the media file (e.g., application/pdf, image/jpeg, video/mp4)
   */
  mimeType: string;

  /**
   * Presigned URL to download the media file
   */
  url: string;

  /**
   * Optional display name for the media file
   */
  fileName?: string;
}

/**
 * Response expected by Avara for study access webhook. Provide presigned URLs for
 * DICOM images and optionally non-DICOM media. Optionally include a study manifest
 * to improve progressive loading of legacy DICOM; it is not required.
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

  /**
   * Optional sidecar for this one study (one object, not an array). Not required —
   * omit if you do not have it. Recommended when you can provide it, especially for
   * very large studies. Enables progressive loading of legacy multi-SOP DICOM so
   * readers can scroll before every file is parsed. Invalid or incomplete values are
   * ignored; URLs still load.
   */
  manifest?: StudyAccessRequestedManifest;

  /**
   * Optional presigned URLs for non-DICOM media (images, PDFs, videos) associated
   * with the study.
   */
  mediaUrls?: Array<StudyAccessRequestedMediaURL>;
}

/**
 * Union of all Avara webhook event types. Use the 'type' field to discriminate
 * between event types. Events: study.access_requested (synchronous),
 * ephemeral.access_requested (synchronous), report.delivered (asynchronous),
 * secondary_capture.access_requested (synchronous), modality_worklist.requested
 * (synchronous), patient_study.enrichment_requested (synchronous soft),
 * clinical_context.enrichment_requested (synchronous soft).
 */
export type WebhookEvent =
  | StudyAccessRequestedEvent
  | EphemeralAccessRequestedEvent
  | ReportDeliveredEvent
  | SecondaryCaptureAccessRequestedEvent
  | ModalityWorklistRequestedEvent
  | PatientStudyEnrichmentRequestedEvent
  | ClinicalContextEnrichmentRequestedEvent;

/**
 * Webhook event sent when Avara needs presigned URLs for an ephemeral viewer
 * session. This is a synchronous webhook — you must respond with the URLs within
 * the request timeout. There is no Avara study; use retrievalId (and optional
 * options) to resolve images.
 */
export type UnsafeUnwrapWebhookEvent =
  | EphemeralAccessRequestedEvent
  | StudyAccessRequestedEvent
  | ReportDeliveredEvent
  | SecondaryCaptureAccessRequestedEvent
  | ModalityWorklistRequestedEvent
  | PatientStudyEnrichmentRequestedEvent
  | ClinicalContextEnrichmentRequestedEvent;

/**
 * Webhook event sent when Avara needs presigned URLs for an ephemeral viewer
 * session. This is a synchronous webhook — you must respond with the URLs within
 * the request timeout. There is no Avara study; use retrievalId (and optional
 * options) to resolve images.
 */
export type UnwrapWebhookEvent =
  | EphemeralAccessRequestedEvent
  | StudyAccessRequestedEvent
  | ReportDeliveredEvent
  | SecondaryCaptureAccessRequestedEvent
  | ModalityWorklistRequestedEvent
  | PatientStudyEnrichmentRequestedEvent
  | ClinicalContextEnrichmentRequestedEvent;

export declare namespace Webhooks {
  export {
    type ClinicalContextEnrichmentDocument as ClinicalContextEnrichmentDocument,
    type ClinicalContextEnrichmentDocumentURL as ClinicalContextEnrichmentDocumentURL,
    type ClinicalContextEnrichmentPriorReport as ClinicalContextEnrichmentPriorReport,
    type ClinicalContextEnrichmentRequestedEvent as ClinicalContextEnrichmentRequestedEvent,
    type ClinicalContextEnrichmentRequestedEventData as ClinicalContextEnrichmentRequestedEventData,
    type ClinicalContextEnrichmentRequestedResponse as ClinicalContextEnrichmentRequestedResponse,
    type EphemeralAccessRequestedEvent as EphemeralAccessRequestedEvent,
    type EphemeralAccessRequestedEventData as EphemeralAccessRequestedEventData,
    type EphemeralAccessRequestedResponse as EphemeralAccessRequestedResponse,
    type ModalityWorklistItem as ModalityWorklistItem,
    type ModalityWorklistRequestedEvent as ModalityWorklistRequestedEvent,
    type ModalityWorklistRequestedEventData as ModalityWorklistRequestedEventData,
    type ModalityWorklistRequestedResponse as ModalityWorklistRequestedResponse,
    type ModalityWorklistScheduledStep as ModalityWorklistScheduledStep,
    type PatientStudyEnrichmentRequestedEvent as PatientStudyEnrichmentRequestedEvent,
    type PatientStudyEnrichmentRequestedEventData as PatientStudyEnrichmentRequestedEventData,
    type PatientStudyEnrichmentRequestedResponse as PatientStudyEnrichmentRequestedResponse,
    type ReportDeliveredEvent as ReportDeliveredEvent,
    type ReportDeliveredEventData as ReportDeliveredEventData,
    type ReportDeliveredResponse as ReportDeliveredResponse,
    type SecondaryCaptureAccessRequestedEvent as SecondaryCaptureAccessRequestedEvent,
    type SecondaryCaptureAccessRequestedEventData as SecondaryCaptureAccessRequestedEventData,
    type SecondaryCaptureAccessRequestedResponse as SecondaryCaptureAccessRequestedResponse,
    type StudyAccessRequestedEvent as StudyAccessRequestedEvent,
    type StudyAccessRequestedEventData as StudyAccessRequestedEventData,
    type StudyAccessRequestedManifest as StudyAccessRequestedManifest,
    type StudyAccessRequestedManifestSeries as StudyAccessRequestedManifestSeries,
    type StudyAccessRequestedManifestSop as StudyAccessRequestedManifestSop,
    type StudyAccessRequestedMediaURL as StudyAccessRequestedMediaURL,
    type StudyAccessRequestedResponse as StudyAccessRequestedResponse,
    type WebhookEvent as WebhookEvent,
    type UnsafeUnwrapWebhookEvent as UnsafeUnwrapWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
