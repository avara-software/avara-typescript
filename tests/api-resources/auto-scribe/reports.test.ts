// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avara from 'avara-software';

const client = new Avara({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.autoScribe.reports.list();
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
      client.autoScribe.reports.list(
        { studyId: 'stu_1234567890abcdef1234567890abcdef', studyInstanceUid: '1.2.840.10008.5.1.4.1.1.2' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('addendum', async () => {
    const responsePromise = client.autoScribe.reports.addendum('rep_1234567890abcdef1234567890abcdef');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancelAddendum', async () => {
    const responsePromise = client.autoScribe.reports.cancelAddendum('rep_1234567890abcdef1234567890abcdef');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pdf', async () => {
    const responsePromise = client.autoScribe.reports.pdf();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('pdf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoScribe.reports.pdf(
        {
          reportId: 'rep_1234567890abcdef1234567890abcdef',
          studyId: 'stu_1234567890abcdef1234567890abcdef',
          studyInstanceUid: '1.2.840.10008.5.1.4.1.1.2',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('text', async () => {
    const responsePromise = client.autoScribe.reports.text();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('text: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoScribe.reports.text(
        {
          reportId: 'rep_1234567890abcdef1234567890abcdef',
          studyId: 'stu_1234567890abcdef1234567890abcdef',
          studyInstanceUid: '1.2.840.10008.5.1.4.1.1.2',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });
});
