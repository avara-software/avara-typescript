// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avara from 'avara-software';

const client = new Avara({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invitations', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.viewer.users.invitations.retrieve('inv_1234567890abcdef1234567890abcdef');
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
    const responsePromise = client.viewer.users.invitations.update('inv_1234567890abcdef1234567890abcdef');
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
      client.viewer.users.invitations.update(
        'inv_1234567890abcdef1234567890abcdef',
        {
          canManageStudies: true,
          clinicRole: 'Radiologist',
          firstName: 'Michael',
          hasDashboardAccess: true,
          lastName: 'Chen',
          level: 'member',
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
    const responsePromise = client.viewer.users.invitations.list();
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
      client.viewer.users.invitations.list(
        {
          cursor: 'eyJvZmZzZXQiOjIwfQ==',
          endDate: '2024-12-31',
          expired: 'not-expired',
          limit: 20,
          startDate: '2024-01-01',
          status: ['sent'],
          userId: 'usr_1234567890abcdef1234567890abcdef',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('revoke', async () => {
    const responsePromise = client.viewer.users.invitations.revoke();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('revoke: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.viewer.users.invitations.revoke(
        {
          invitationId: 'inv_1234567890abcdef1234567890abcdef',
          userId: 'usr_1234567890abcdef1234567890abcdef',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });
});
