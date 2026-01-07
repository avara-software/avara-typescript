// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avara from 'avara';

const client = new Avara({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.orgs.users.add('org_1234567890abcdef1234567890abcdef', {
      userId: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
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
  test.skip('add: required and optional params', async () => {
    const response = await client.orgs.users.add('org_1234567890abcdef1234567890abcdef', {
      userId: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
    });
  });

  // Prism tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.orgs.users.remove('org_1234567890abcdef1234567890abcdef', {
      userId: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
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
  test.skip('remove: required and optional params', async () => {
    const response = await client.orgs.users.remove('org_1234567890abcdef1234567890abcdef', {
      userId: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
    });
  });
});
