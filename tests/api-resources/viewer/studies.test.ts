// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avara from 'avara';

const client = new Avara({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource studies', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.viewer.studies.create({
      cancelledAt: '2019-12-27T18:11:19.117Z',
      isCancelled: true,
      severity: 'normal',
      studyDescription: 'x',
      studyInstanceUid: '.16...2511..',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.viewer.studies.create({
      cancelledAt: '2019-12-27T18:11:19.117Z',
      isCancelled: true,
      severity: 'normal',
      studyDescription: 'x',
      studyInstanceUid: '.16...2511..',
      assignedTo: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
      createdByApiKeyId: 'x',
      createdByUserId: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
      metadata: { foo: 'string' },
      orgId: 'org_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.viewer.studies.retrieve('stu_1234567890abcdef1234567890abcdef');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.viewer.studies.update('stu_1234567890abcdef1234567890abcdef');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.viewer.studies.update(
        'stu_1234567890abcdef1234567890abcdef',
        {
          assignedTo: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
          metadata: { foo: 'string' },
          severity: 'normal',
          studyDescription: 'x',
          studyViewerStatus: 'incomplete',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.viewer.studies.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.viewer.studies.list(
        {
          assignedTo: 'usr_1234567890abcdef1234567890abcdef',
          cursor: 'eyJvZmZzZXQiOjIwfQ==',
          isCancelled: false,
          limit: 20,
          severity: 'normal',
          studyDescription: 'CT Head',
          studyViewerStatus: 'complete',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.viewer.studies.cancel();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.viewer.studies.cancel(
        { studyId: 'stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', studyInstanceUid: '.16...2511..' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('rerouteURL', async () => {
    const responsePromise = client.viewer.studies.rerouteURL();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('rerouteURL: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.viewer.studies.rerouteURL(
        { studyId: 'stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', studyInstanceUid: '.16...2511..' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('uncancel', async () => {
    const responsePromise = client.viewer.studies.uncancel();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('uncancel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.viewer.studies.uncancel(
        { studyId: 'stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', studyInstanceUid: '.16...2511..' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });
});
