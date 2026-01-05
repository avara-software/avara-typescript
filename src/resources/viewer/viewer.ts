// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StudiesAPI from './studies';
import {
  Studies,
  StudyCancelParams,
  StudyCancelResponse,
  StudyCreateParams,
  StudyCreateResponse,
  StudyListParams,
  StudyListResponse,
  StudyListResponsesCursorStudies,
  StudyRerouteURLParams,
  StudyRerouteURLResponse,
  StudyRetrieveByUidResponse,
  StudyRetrieveResponse,
  StudyUncancelParams,
  StudyUncancelResponse,
  StudyUpdateParams,
  StudyUpdateResponse,
} from './studies';
import * as UsersAPI from './users/users';
import {
  UserCreateParams,
  UserCreateResponse,
  UserListParams,
  UserListResponse,
  UserListResponsesCursorUsers,
  UserReactivateParams,
  UserReactivateResponse,
  UserRetrieveResponse,
  UserRevokeAccessParams,
  UserRevokeAccessResponse,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './users/users';

export class Viewer extends APIResource {
  studies: StudiesAPI.Studies = new StudiesAPI.Studies(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Viewer.Studies = Studies;
Viewer.Users = Users;

export declare namespace Viewer {
  export {
    Studies as Studies,
    type StudyCreateResponse as StudyCreateResponse,
    type StudyRetrieveResponse as StudyRetrieveResponse,
    type StudyUpdateResponse as StudyUpdateResponse,
    type StudyListResponse as StudyListResponse,
    type StudyCancelResponse as StudyCancelResponse,
    type StudyRerouteURLResponse as StudyRerouteURLResponse,
    type StudyRetrieveByUidResponse as StudyRetrieveByUidResponse,
    type StudyUncancelResponse as StudyUncancelResponse,
    type StudyListResponsesCursorStudies as StudyListResponsesCursorStudies,
    type StudyCreateParams as StudyCreateParams,
    type StudyUpdateParams as StudyUpdateParams,
    type StudyListParams as StudyListParams,
    type StudyCancelParams as StudyCancelParams,
    type StudyRerouteURLParams as StudyRerouteURLParams,
    type StudyUncancelParams as StudyUncancelParams,
  };

  export {
    Users as Users,
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserReactivateResponse as UserReactivateResponse,
    type UserRevokeAccessResponse as UserRevokeAccessResponse,
    type UserListResponsesCursorUsers as UserListResponsesCursorUsers,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserReactivateParams as UserReactivateParams,
    type UserRevokeAccessParams as UserRevokeAccessParams,
  };
}
