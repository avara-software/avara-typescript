// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Avara from 'avara';

const client = new Avara({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource external', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.autoScribe.studies.external.create({
      reportMetadata: {},
      severity: 'normal',
      studyDescription: 'CT Chest without contrast',
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

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.autoScribe.studies.external.create({
      reportMetadata: {
        age: '38 years',
        dateOfBirth: '1985-07-20',
        facilityName: 'City Medical Center',
        height: { unit: 'cm', value: 165 },
        mrn: 'MRN-2024-001234',
        patientName: 'Jane Doe',
        procedure: 'CT Chest',
        referringPhysicianName: 'Dr. Michael Chen',
        sex: 'female',
        studyDate: '2024-01-15',
        studyTime: '14:30',
        weight: { unit: 'kg', value: 62 },
      },
      severity: 'normal',
      studyDescription: 'CT Chest without contrast',
      studyInstanceUid: '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
      expressCustomerId: 'cus_1234567890abcdef1234567890abcdef',
      externalPatientId: 'PAT-2024-7731',
      metadata: { department: 'radiology', priority: 'routine' },
      modality: 'modality',
      readerName: 'x',
      reportFileName: 'x',
      reportFileUrl: 'https://example.com',
      reportText: 'IMPRESSION: No acute cardiopulmonary process.',
      signedAt: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.autoScribe.studies.external.delete();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoScribe.studies.external.delete(
        {
          studyId: 'stu_1234567890abcdef1234567890abcdef',
          studyInstanceUid: '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Avara.NotFoundError);
  });
});
