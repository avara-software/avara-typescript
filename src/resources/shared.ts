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
   * Whether this API key has access to the Viewer product
   */
  isViewerEnabled?: boolean;
}

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
