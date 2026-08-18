// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avara from 'avara-software';

const client = new Avara({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource clinicalReferences', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.autoScribe.clinicalReferences.create({
      name: 'City Medical Center',
      type: 'facility',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.autoScribe.clinicalReferences.create({
      name: 'City Medical Center',
      type: 'facility',
      expressCustomerId: 'cus_1234567890abcdef1234567890abcdef',
      externalReferenceId: 'FAC-001',
      metadata: { region: 'northeast' },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.autoScribe.clinicalReferences.retrieve(
      'ref_1234567890abcdef1234567890abcdef',
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
  test.skip('update', async () => {
    const responsePromise = client.autoScribe.clinicalReferences.update(
      'ref_1234567890abcdef1234567890abcdef',
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
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoScribe.clinicalReferences.update(
        'ref_1234567890abcdef1234567890abcdef',
        {
          expressCustomerId: 'cus_1234567890abcdef1234567890abcdef',
          metadata: { region: 'northeast', wing: 'Building A' },
          name: 'City Medical Center - Main Campus',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.autoScribe.clinicalReferences.list();
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
      client.autoScribe.clinicalReferences.list(
        {
          cursor: 'eyJjcmVhdGVkQXQiOiIyMDI0LTAxLTE1VDA5OjAwOjAwWiJ9',
          expressCustomerId: 'cus_1234567890abcdef1234567890abcdef',
          isActive: true,
          limit: 20,
          type: 'facility',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.autoScribe.clinicalReferences.delete(
      'ref_1234567890abcdef1234567890abcdef',
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
  test.skip('retrieveByExternalReferenceID', async () => {
    const responsePromise = client.autoScribe.clinicalReferences.retrieveByExternalReferenceID('FAC-001');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
