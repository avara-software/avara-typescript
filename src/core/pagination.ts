// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AvaraError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type Avara } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: Avara;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: Avara, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new AvaraError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: Avara,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface CursorUsersResponse<Item> {
  /**
   * Array of user objects
   */
  users: Array<Item>;

  /**
   * Next page cursor. Pass this to the next request to get the next page of results
   */
  cursor: string;

  /**
   * Whether there are more results available
   */
  hasMore: boolean;
}

export interface CursorUsersParams {
  /**
   * Base64 encoded cursor from previous response for pagination
   */
  cursor?: string;

  /**
   * Number of results to return (1-100). Defaults to 20
   */
  limit?: number;
}

export class CursorUsers<Item> extends AbstractPage<Item> implements CursorUsersResponse<Item> {
  /**
   * Array of user objects
   */
  users: Array<Item>;

  /**
   * Next page cursor. Pass this to the next request to get the next page of results
   */
  cursor: string;

  /**
   * Whether there are more results available
   */
  hasMore: boolean;

  constructor(
    client: Avara,
    response: Response,
    body: CursorUsersResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.users = body.users || [];
    this.cursor = body.cursor || '';
    this.hasMore = body.hasMore || false;
  }

  getPaginatedItems(): Item[] {
    return this.users ?? [];
  }

  override hasNextPage(): boolean {
    if (this.hasMore === false) {
      return false;
    }

    return super.hasNextPage();
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface CursorStudiesResponse<Item> {
  /**
   * Array of study objects
   */
  studies: Array<Item>;

  /**
   * Next page cursor. Pass this to the next request to get the next page of results
   */
  cursor: string;

  /**
   * Whether there are more results available
   */
  hasMore: boolean;
}

export interface CursorStudiesParams {
  /**
   * Base64 encoded cursor from previous response for pagination
   */
  cursor?: string;

  /**
   * Number of results to return (1-100). Defaults to 20
   */
  limit?: number;
}

export class CursorStudies<Item> extends AbstractPage<Item> implements CursorStudiesResponse<Item> {
  /**
   * Array of study objects
   */
  studies: Array<Item>;

  /**
   * Next page cursor. Pass this to the next request to get the next page of results
   */
  cursor: string;

  /**
   * Whether there are more results available
   */
  hasMore: boolean;

  constructor(
    client: Avara,
    response: Response,
    body: CursorStudiesResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.studies = body.studies || [];
    this.cursor = body.cursor || '';
    this.hasMore = body.hasMore || false;
  }

  getPaginatedItems(): Item[] {
    return this.studies ?? [];
  }

  override hasNextPage(): boolean {
    if (this.hasMore === false) {
      return false;
    }

    return super.hasNextPage();
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface CursorInvitationsResponse<Item> {
  /**
   * Array of invitation objects
   */
  invitations: Array<Item>;

  /**
   * Next page cursor. Pass this to the next request to get the next page of results
   */
  cursor: string;

  /**
   * Whether there are more results available
   */
  hasMore: boolean;
}

export interface CursorInvitationsParams {
  /**
   * Base64 encoded cursor from previous response for pagination
   */
  cursor?: string;

  /**
   * Number of results to return (1-100). Defaults to 20
   */
  limit?: number;
}

export class CursorInvitations<Item> extends AbstractPage<Item> implements CursorInvitationsResponse<Item> {
  /**
   * Array of invitation objects
   */
  invitations: Array<Item>;

  /**
   * Next page cursor. Pass this to the next request to get the next page of results
   */
  cursor: string;

  /**
   * Whether there are more results available
   */
  hasMore: boolean;

  constructor(
    client: Avara,
    response: Response,
    body: CursorInvitationsResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.invitations = body.invitations || [];
    this.cursor = body.cursor || '';
    this.hasMore = body.hasMore || false;
  }

  getPaginatedItems(): Item[] {
    return this.invitations ?? [];
  }

  override hasNextPage(): boolean {
    if (this.hasMore === false) {
      return false;
    }

    return super.hasNextPage();
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}

export interface CursorExpressCustomersResponse<Item> {
  /**
   * Array of Express customer objects
   */
  expressCustomers: Array<Item>;

  /**
   * Next page cursor. Pass this to the next request to get the next page of results
   */
  cursor: string;

  /**
   * Whether there are more results available
   */
  hasMore: boolean;
}

export interface CursorExpressCustomersParams {
  /**
   * Base64 encoded cursor from previous response for pagination
   */
  cursor?: string;

  /**
   * Number of results to return (1-100). Defaults to 20
   */
  limit?: number;
}

export class CursorExpressCustomers<Item>
  extends AbstractPage<Item>
  implements CursorExpressCustomersResponse<Item>
{
  /**
   * Array of Express customer objects
   */
  expressCustomers: Array<Item>;

  /**
   * Next page cursor. Pass this to the next request to get the next page of results
   */
  cursor: string;

  /**
   * Whether there are more results available
   */
  hasMore: boolean;

  constructor(
    client: Avara,
    response: Response,
    body: CursorExpressCustomersResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.expressCustomers = body.expressCustomers || [];
    this.cursor = body.cursor || '';
    this.hasMore = body.hasMore || false;
  }

  getPaginatedItems(): Item[] {
    return this.expressCustomers ?? [];
  }

  override hasNextPage(): boolean {
    if (this.hasMore === false) {
      return false;
    }

    return super.hasNextPage();
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const cursor = this.cursor;
    if (!cursor) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        cursor,
      },
    };
  }
}
