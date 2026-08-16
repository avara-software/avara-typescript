// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * A reference to an API key with basic identifying information
 */
export interface APIKeyReference {
  /**
   * Unique API key identifier (UUIDv4 format)
   */
  apiKeyId: string;

  /**
   * Human-readable description of the API key
   */
  description: string;

  /**
   * Whether this API key has a clinical-context enrichment webhook configured
   */
  isClinicalContextEnrichmentEnabled?: boolean;

  /**
   * Whether this API key has access to the Viewer product
   */
  isViewerEnabled?: boolean;
}

/**
 * User access level assignable via the API. 'admin' can manage users/settings,
 * 'member' has standard access. 'owner' is dashboard-only and cannot be assigned
 * via the API.
 */
export type AssignableUserLevel = 'admin' | 'member';

/**
 * A user's clinical or organizational role within the clinic.
 */
export type ClinicRole =
  | 'Doctor'
  | 'Physician'
  | 'Surgeon'
  | 'Radiologist'
  | 'Cardiologist'
  | 'Neurologist'
  | 'Urologist'
  | 'Gynecologist'
  | 'Endocrinologist'
  | 'Oncologist'
  | 'Radiation Oncologist'
  | 'Hematologist'
  | 'Gastroenterologist'
  | 'Pulmonologist'
  | 'Nephrologist'
  | 'Rheumatologist'
  | 'Dermatologist'
  | 'Ophthalmologist'
  | 'Otolaryngologist'
  | 'Pediatrician'
  | 'Obstetrician'
  | 'Psychiatrist'
  | 'Anesthesiologist'
  | 'Emergency Medicine Physician'
  | 'Family Medicine Physician'
  | 'Internal Medicine Physician'
  | 'Pathologist'
  | 'Nuclear Medicine Physician'
  | 'Pain Management Specialist'
  | 'Infectious Disease Specialist'
  | 'Immunologist'
  | 'Physician Assistant'
  | 'Nurse Practitioner'
  | 'Certified Registered Nurse Anesthetist'
  | 'Psychologist'
  | 'Medical Assistant'
  | 'Scribe'
  | 'Registered Nurse'
  | 'Nurse Manager'
  | 'Patient Care Coordinator'
  | 'Imaging Technologist'
  | 'Laboratory Technician'
  | 'Medical Laboratory Scientist'
  | "Pathologists' Assistant"
  | 'Phlebotomist'
  | 'Pharmacist'
  | 'Pharmacy Technician'
  | 'Physical Therapist'
  | 'Occupational Therapist'
  | 'Speech-Language Pathologist'
  | 'Respiratory Therapist'
  | 'Nutritionist'
  | 'Front Desk Operator'
  | 'Revenue Cycle Manager'
  | 'Administrative Director'
  | 'Administrative Assistant'
  | 'Legal Administrator'
  | 'IT Administrator'
  | 'IT Support'
  | 'Software Engineer'
  | 'Other';

/**
 * Optional single-monitor hanging protocol applied when the ephemeral viewer
 * loads. Omitted = no protocol. Invalid shape is rejected.
 */
export interface EphemeralHangingProtocol {
  /**
   * Viewport grid layout for an ephemeral hanging protocol. Wire values match
   * first-party viewer layouts ('1x1' through '4x4').
   */
  layout: ViewerLayout;

  viewportAssignments: Array<string | null>;
}

/**
 * A reference to an Express customer with basic identifying information
 */
export interface ExpressCustomerReference {
  /**
   * Unique Express customer identifier. Format: cus\_{32-hex-chars}
   */
  expressCustomerId: string;

  /**
   * Name of the Express customer
   */
  expressCustomerName: string;
}

/**
 * Filter by expiration status
 */
export type InvitationExpiredFilter = 'all' | 'expired' | 'not-expired';

/**
 * Lifecycle status of an invitation: 'sent', 'accepted', 'rejected', or 'revoked'.
 */
export type InvitationStatus = 'sent' | 'accepted' | 'rejected' | 'revoked';

/**
 * How a user/invitation was created - via the dashboard UI ('dashboard') or the
 * API ('api').
 */
export type InvitedSource = 'dashboard' | 'api';

/**
 * Priority level of a study. 'normal' for routine, 'high' for urgent, 'stat' for
 * immediate attention.
 */
export type Severity = 'normal' | 'high' | 'stat';

/**
 * User access level. 'owner' has full control (dashboard-only, not assignable via
 * API), 'admin' can manage users/settings, 'member' has standard access.
 */
export type UserLevel = 'owner' | 'admin' | 'member';

/**
 * A reference to a user with basic identifying information
 */
export interface UserReference {
  /**
   * User's email address
   */
  email: string;

  /**
   * Unique user identifier. Format: usr\_{32-hex-chars}
   */
  userId: string;

  /**
   * User's first name
   */
  firstName?: string;

  /**
   * User's last name
   */
  lastName?: string;

  /**
   * User's middle name
   */
  middleName?: string;

  /**
   * Name suffix (e.g., 'MD', 'Jr.')
   */
  suffix1?: string;

  /**
   * Additional name suffix
   */
  suffix2?: string;
}

/**
 * Viewport grid layout for an ephemeral hanging protocol. Wire values match
 * first-party viewer layouts ('1x1' through '4x4').
 */
export type ViewerLayout =
  | '1x1'
  | '1x2'
  | '1x3'
  | '1x4'
  | '2x1'
  | '2x2'
  | '2x3'
  | '2x4'
  | '3x1'
  | '3x2'
  | '3x3'
  | '3x4'
  | '4x1'
  | '4x2'
  | '4x3'
  | '4x4';
