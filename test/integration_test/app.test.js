process.env.NODE_ENV = 'test';
process.env.DEFAULT_PARKING_LOCATION = '130 King Street, London, ON N6A 1C5';
process.env.TOTAL_PARKING_SPOTS = '2';
process.env.STARTING_RATE = '3';
process.env.RATE_INCREASE = '50';
process.env.RATES_DURATION = '1,3,6,24';
process.env.RATES_NAME = '1hr,3hr,6hr,ALL DAY';

const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../../app');
let connection;

beforeAll(async () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection = await mongoose.connection;
});

afterAll(async () => {
  await connection.close();
});

describe('POST /tickets', () => {
  test('Should responds with a ticket number 1', async () => {
    const res = await request(app)
      .post('/tickets')
      .send();

    expect(JSON.parse(res.text)).toBe('1');
    expect(res.statusCode).toBe(200);
  });

  test('Should responds with a ticket number increasing ticket number by 1', async () => {
    const res = await request(app)
      .post('/tickets')
      .send();

    expect(JSON.parse(res.text)).toBe('2');
    expect(res.statusCode).toBe(200);
  });

  test('Should responds with Parking Full', async () => {
    const res = await request(app)
      .post('/tickets')
      .send();

    expect(JSON.parse(res.text)).toBe('Parking Full');
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /tickets/:ticketNumber', () => {
  test('Should responds with 3.00', async () => {
    const res = await request(app).get('/tickets/1');

    expect(JSON.parse(res.text)).toBe('3.00');
    expect(res.statusCode).toBe(200);
  });

  test('Should responds with Ticket Not Found!', async () => {
    const res = await request(app).get('/tickets/3');

    expect(JSON.parse(res.text)).toBe('Ticket not found!');
    expect(res.statusCode).toBe(200);
  });
});

describe('POST /payments/:ticketNumber', () => {
  describe('POST /payments/:ticketNumber test 1', () => {
    test('Should responds with Ticket not found!', async () => {
      const res = await request(app)
        .post('/payments/3')
        .send({
          creditCardNumber: 342282486634422,
        });

      expect(JSON.parse(res.text)).toBe('Ticket not found!');
      expect(res.statusCode).toBe(200);
    });

    test('Should responds with Invalid Credit Card Number', async () => {
      const res = await request(app)
        .post('/payments/2')
        .send({
          creditCardNumber: 342282486634422564654,
        });

      expect(JSON.parse(res.text)).toBe('Invalid Credit Card Number');
      expect(res.statusCode).toBe(200);
    });

    test('Should responds with Ticket has been pay. Thank you for your business!', async () => {
      const res = await request(app)
        .post('/payments/1')
        .send({
          creditCardNumber: 342282486634422,
        });

      expect(JSON.parse(res.text)).toBe(
        'Ticket has been pay. Thank you for your business!'
      );
      expect(res.statusCode).toBe(200);
    });
  });

  describe('POST /payments/:ticketNumber test 2', () => {
    test('Should responds with Ticket already paid!', async () => {
      const res = await request(app)
        .post('/payments/1')
        .send({
          creditCardNumber: 342282486634422,
        });

      expect(JSON.parse(res.text)).toBe('Ticket already paid!');
      expect(res.statusCode).toBe(200);
    });

    test('Should responds with Ticket has been pay. Thank you for your business!', async () => {
      const res = await request(app)
        .post('/payments/2')
        .send({
          creditCardNumber: 342282486634422,
        });

      expect(JSON.parse(res.text)).toBe(
        'Ticket has been pay. Thank you for your business!'
      );
      expect(res.statusCode).toBe(200);
    });
  });
});

describe('GET /ticket', () => {
  test('Should responds with 404 Error', async () => {
    const res = await request(app).get('/ticket');

    expect(res.statusCode).toBe(404);
  });
});
