import request from 'supertest';
import each from 'jest-each';
import app from '../../src/app';

describe('SplitPaymentRequestTest', () => {
  each([
    [{ amount: 0 }, 422],
    [{ times: 0 }, 422],
    [{ }, 422],
    [{ amount: -1, times: 1 }, 422],
    [{ amount: 1000, times: -1 }, 422],
    [{ amount: 1000, times: 6 }, 422]
  ]).test('it should fail on validate parameters', async (requestParams, expected) => {
    await request(app)
      .post('/api/v1/installments')
      .set('Content-type', 'application/json')
      .send(requestParams)
      .expect(expected);
  });

  test('it should split a payment', async () => {
    const requestParams = {
      amount: 1000.00,
      times: 2
    };
    const expectedAmount = 500;
    const response = await request(app)
      .post('/api/v1/installments')
      .set('Content-type', 'application/json')
      .send(requestParams)
      .expect(200);

    expect(response.body.data).toBe(expectedAmount.toFixed(2));
  });
});
