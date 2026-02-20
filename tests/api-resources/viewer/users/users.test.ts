// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avara from 'avara';

const client = new Avara({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.viewer.users.retrieve('usr_1234567890abcdef1234567890abcdef');
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
    const responsePromise = client.viewer.users.update('usr_1234567890abcdef1234567890abcdef');
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
      client.viewer.users.update(
        'usr_1234567890abcdef1234567890abcdef',
        {
          canManageStudies: true,
          clinicRole: 'Radiologist',
          firstName: 'Sarah',
          hasDashboardAccess: true,
          lastName: 'Johnson-Smith',
          level: 'admin',
          middleName: 'x',
          phoneNumber: '5551234567',
          suffix1: 'x',
          suffix2: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.viewer.users.list();
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
      client.viewer.users.list(
        {
          cursor: 'eyJvZmZzZXQiOjIwfQ==',
          email: 'user@example.com',
          firstName: 'John',
          invitedSource: 'api',
          lastName: 'Doe',
          level: 'member',
          limit: 20,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('invite: only required params', async () => {
    const responsePromise = client.viewer.users.invite({
      canManageStudies: true,
      clinicRole: 'Radiologist',
      email: 'dr.johnson@hospital.org',
      firstName: 'Sarah',
      hasDashboardAccess: true,
      lastName: 'Johnson',
      level: 'member',
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
  test.skip('invite: required and optional params', async () => {
    const response = await client.viewer.users.invite({
      canManageStudies: true,
      clinicRole: 'Radiologist',
      email: 'dr.johnson@hospital.org',
      firstName: 'Sarah',
      hasDashboardAccess: true,
      lastName: 'Johnson',
      level: 'member',
      middleName: 'Marie',
      phoneNumber: '5551234567',
      suffix1: 'MD',
      suffix2: 'FACR',
    });
  });

  // Mock server tests are disabled
  test.skip('reactivate: only required params', async () => {
    const responsePromise = client.viewer.users.reactivate({
      userId: 'usr_1234567890abcdef1234567890abcdef',
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
  test.skip('reactivate: required and optional params', async () => {
    const response = await client.viewer.users.reactivate({ userId: 'usr_1234567890abcdef1234567890abcdef' });
  });

  // Mock server tests are disabled
  test.skip('revokeAccess: only required params', async () => {
    const responsePromise = client.viewer.users.revokeAccess({
      userId: 'usr_1234567890abcdef1234567890abcdef',
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
  test.skip('revokeAccess: required and optional params', async () => {
    const response = await client.viewer.users.revokeAccess({
      userId: 'usr_1234567890abcdef1234567890abcdef',
    });
  });
});
