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
      studyDescription: 'Brain MRI with Contrast',
      studyInstanceUid: '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
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
        age: '38 years',
        dateOfBirth: '1985-07-20',
        facilityName: 'City Medical Center',
        height: { unit: 'cm', value: 165 },
        mrn: 'MRN-2024-001234',
        patientName: 'Jane Doe',
        referringPhysicianName: 'Dr. Michael Chen',
        scanDate: '2024-03-15',
        scanTime: '14:30',
        scanType: 'MRI Brain with Contrast',
        sex: 'female',
        weight: { unit: 'kg', value: 62 },
      },
      severity: 'normal',
      studyDescription: 'Brain MRI with Contrast',
      studyInstanceUid: '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
      assignedTo: 'usr_1234567890abcdef1234567890abcdef',
      metadata: { department: 'radiology', priority: 'routine' },
      orgId: 'org_1234567890abcdef1234567890abcdef',
      priorReportTexts: ['x'],
      priorStudyIds: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.autoScribe.studies.retrieve('stu_1234567890abcdef1234567890abcdef');
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
    const responsePromise = client.autoScribe.studies.update('stu_1234567890abcdef1234567890abcdef');
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
        'stu_1234567890abcdef1234567890abcdef',
        {
          assignedTo: 'usr_1234567890abcdef1234567890abcdef',
          metadata: { foo: 'string' },
          orgId: 'org_1234567890abcdef1234567890abcdef',
          priorReportTexts: ['x'],
          priorStudyIds: ['string'],
          reportMetadata: {
            age: 'age',
            dateOfBirth: '7321-69-10',
            facilityName: 'facilityName',
            height: { unit: 'cm', value: 170 },
            mrn: 'mrn',
            patientName: 'Jane M. Doe',
            referringPhysicianName: 'referringPhysicianName',
            scanDate: '7321-69-10',
            scanTime: 'scanTime',
            scanType: 'scanType',
            sex: 'female',
            weight: { unit: 'kg', value: 68 },
          },
          severity: 'high',
          studyDescription: 'Brain MRI with and without Contrast',
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
        {
          studyId: 'stu_1234567890abcdef1234567890abcdef',
          studyInstanceUid: '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('rerouteURL: only required params', async () => {
    const responsePromise = client.autoScribe.studies.rerouteURL({
      assignedToUserId: 'usr_1234567890abcdef1234567890abcdef',
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
      assignedToUserId: 'usr_1234567890abcdef1234567890abcdef',
      studyId: 'stu_1234567890abcdef1234567890abcdef',
      studyInstanceUid: '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveByUid', async () => {
    const responsePromise = client.autoScribe.studies.retrieveByUid('1.2.840.10008.5.1.4.1.1.2');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
        {
          studyId: 'stu_1234567890abcdef1234567890abcdef',
          studyInstanceUid: '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
        },
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
          studyId: 'stu_1234567890abcdef1234567890abcdef',
          studyInstanceUid: '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
          userId: 'usr_1234567890abcdef1234567890abcdef',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });
});
