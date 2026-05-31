import { fetchReports } from './reportEngine';

// Configuración moderna para Jest
describe('CityFix API Tests', () => {
    
    test('Debe traer datos reales de Supabase y validar estructura', async () => {
        // Ejecutar el motor de conexión
        const data = await fetchReports();
        
        // Mostrar los datos en la terminal (si llegaron)
        console.table(data); 

        // Validaciones
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThanOrEqual(5);
        
        const firstRecord = data[0];
        expect(firstRecord).toHaveProperty('id');
        expect(firstRecord).toHaveProperty('title');
        
        console.log("¡Certificación exitosa! Los datos del barrio han sido validados.");
    }, 10000); // <-- El tiempo de espera se pone aquí, al final del test
});