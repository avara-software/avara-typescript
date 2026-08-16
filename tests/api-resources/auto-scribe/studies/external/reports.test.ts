// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avara from 'avara';

const client = new Avara({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.autoScribe.studies.external.reports.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoScribe.studies.external.reports.create(
        {
          readerName: 'x',
          reportFileName: 'x',
          reportFileUrl: 'https://example.com',
          reportText: 'x',
          signedAt: 'x',
          studyId: 'stu_1234567890abcdef1234567890abcdef',
          studyInstanceUid: '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.autoScribe.studies.external.reports.retrieve(
      'ext_1234567890abcdef1234567890abcdef',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.autoScribe.studies.external.reports.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoScribe.studies.external.reports.list(
        {
          cursor: 'cursor',
          limit: 20,
          studyId: 'stu_1234567890abcdef1234567890abcdef',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });
});
