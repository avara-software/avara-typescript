// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * A reference to an API key with basic identifying information
 */
export interface APIKeyReference {
  apiKeyId: string;

  description: string;

  isViewerEnabled?: boolean;
}

/**
 * A reference to an organization with basic identifying information
 */
export interface OrgReference {
  orgId: string;

  orgName: string;
}

/**
 * A reference to a user with basic identifying information
 */
export interface UserReference {
  email: string;

  userId: string;

  firstName?: string;

  lastName?: string;

  middleName?: string;

  suffix1?: string;

  suffix2?: string;
}
