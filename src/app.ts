// Función para calcular la edad a partir de la fecha de nacimiento
function AgeCalc(fechaNacimiento: string): number | string{
    
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
        return "Formato inválido. Usa YYYY-MM-DD.";
    }

    const fechaNacimientoDate = new Date(fechaNacimiento);
    if (isNaN(fechaNacimientoDate.getTime())) {
        return "Fecha no válida.";
    }

    const hoy: Date = new Date();
    
    let edad: number = hoy.getFullYear() - fechaNacimientoDate.getFullYear();

    if (hoy.getMonth() < fechaNacimientoDate.getMonth() ||
        (hoy.getMonth() === fechaNacimientoDate.getMonth() && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    return edad;
}

// Ejemplo de uso
const fechaDeNacimiento: string = "1995-08-08";
const fechaDeNacimiento2: string = "2000-01-15";
const fechaDeNacimiento3: string = "1987-11-30";

//formatos invalidos
const fechaDeNacimiento4: string = "2000-01-1599";
const fechaDeNacimiento5: string = "1987-11-30jl";

console.log(`La edad es: ${AgeCalc(fechaDeNacimiento)} años`);
console.log(`La edad es: ${AgeCalc(fechaDeNacimiento2)} años`);  // Debería calcular 24 si es 2024
console.log(`La edad es: ${AgeCalc(fechaDeNacimiento3)} años`);  // Debería calcular 36 si es 2024

console.log(`La edad es: ${AgeCalc(fechaDeNacimiento4)} años`);
console.log(`La edad es: ${AgeCalc(fechaDeNacimiento5)} años`);