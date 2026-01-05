// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avara from 'avara';

const client = new Avara({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource studies', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.autoScribe.studies.create({
      reportMetadata: {},
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
    const response = await client.autoScribe.studies.create({
      reportMetadata: {
        age: 'age',
        dateOfBirth: '7321-69-10',
        facilityName: 'facilityName',
        height: { unit: 'in', value: 0 },
        mrn: 'mrn',
        patientName: 'patientName',
        referringPhysicianName: 'referringPhysicianName',
        scanDate: '7321-69-10',
        scanTime: 'scanTime',
        scanType: 'scanType',
        sex: 'male',
        weight: { unit: 'lbs', value: 0 },
      },
      severity: 'normal',
      studyDescription: 'x',
      studyInstanceUid: '.16...2511..',
      assignedTo: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
      metadata: { foo: 'string' },
      orgId: 'org_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
      priorReportTexts: ['x'],
      priorStudyIds: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.autoScribe.studies.retrieve('stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD');
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
    const responsePromise = client.autoScribe.studies.update('stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD');
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
      client.autoScribe.studies.update(
        'stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
        {
          assignedTo: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
          metadata: { foo: 'string' },
          orgId: 'org_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
          priorReportTexts: ['x'],
          priorStudyIds: ['string'],
          reportMetadata: {
            age: 'age',
            dateOfBirth: '7321-69-10',
            facilityName: 'facilityName',
            height: { unit: 'in', value: 0 },
            mrn: 'mrn',
            patientName: 'patientName',
            referringPhysicianName: 'referringPhysicianName',
            scanDate: '7321-69-10',
            scanTime: 'scanTime',
            scanType: 'scanType',
            sex: 'male',
            weight: { unit: 'lbs', value: 0 },
          },
          severity: 'normal',
          studyDescription: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.autoScribe.studies.list();
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
      client.autoScribe.studies.list(
        {
          assignedTo: 'usr_1234567890abcdef1234567890abcdef',
          cursor: 'eyJvZmZzZXQiOjIwfQ==',
          isCancelled: false,
          limit: 20,
          severity: 'normal',
          studyDescription: 'CT Head',
          studyReportStatus: ['completed'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.autoScribe.studies.cancel();
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
      client.autoScribe.studies.cancel(
        { studyId: 'stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', studyInstanceUid: '.16...2511..' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('rerouteURL: only required params', async () => {
    const responsePromise = client.autoScribe.studies.rerouteURL({
      assignedToUserId: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
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
  test.skip('rerouteURL: required and optional params', async () => {
    const response = await client.autoScribe.studies.rerouteURL({
      assignedToUserId: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
      studyId: 'stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
      studyInstanceUid: '.16...2511..',
    });
  });

  // Prism tests are disabled
  test.skip('uncancel', async () => {
    const responsePromise = client.autoScribe.studies.uncancel();
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
      client.autoScribe.studies.uncancel(
        { studyId: 'stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', studyInstanceUid: '.16...2511..' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('viewerOnlyRerouteURL', async () => {
    const responsePromise = client.autoScribe.studies.viewerOnlyRerouteURL();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('viewerOnlyRerouteURL: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoScribe.studies.viewerOnlyRerouteURL(
        {
          studyId: 'stu_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
          studyInstanceUid: '.16...2511..',
          userId: 'usr_E1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });
});
