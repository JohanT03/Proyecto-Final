class FiguraService {
    calcularAreaCuadrado(lado = 0) {
        let resultado = lado * lado;
        return resultado;
    }
    calcularAreaTriangulo(base = 0, altura = 0) {
        let resultado = (base * altura) / 2;
        return resultado;
    }
    calcularAreaPentagono(base = 0, apotema = 0) {
        let resultado = (base * apotema) / 2;
        return resultado;
    }
    // Perímetro
    calcularPerimetroCuadrado(lado = 0) {
        let resultado = (lado * 4);
        return resultado;
    }
    calcularPerimetroTriangulo(lado = 0) {
        let resultado = (3 * lado);
        return resultado;
    }
    calcularPerimetroPentagono(lado = 0) {
        let resultado = (5 * lado);
        return resultado;
    }
}
export default FiguraService;
