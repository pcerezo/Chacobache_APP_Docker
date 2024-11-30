const request = require('supertest');
const app = require('../index');


test('GET /api/test/saludo devuelve un mensaje de bienvenida', async () => {
    const res = await request(app).get('/api/test/saludo');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello World');
});

/*
test('GET /api/eventos/historialEventosPasados debe devolver eventos pasados no individuales', async () => {
    const res = await request(app).get('/api/eventos/historialEventosPasados');
    expect(res.statusCode).toBe(200); // Verifica que la respuesta sea exitosa
    expect(Array.isArray(res.body)).toBe(true); // Verifica que la respuesta sea un array

    res.body.forEach(evento => {
      expect(new Date(evento.fecha) < new Date()).toBe(true); // Verifica que las fechas sean pasadas
      expect(evento.tipo).not.toBe('individual'); // Verifica que el tipo no sea 'individual'
    });
  }); 
*/