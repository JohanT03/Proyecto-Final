import FiguraService from "../models/FiguraService.js";
class FiguraController {
    figuraServices = null;

    constructor() {
        this.figuraServices = new FiguraService();
        this.formularioCalcularArea = this.formularioCalcularArea.bind(this);
        this.calcularAreaFiguras = this.calcularAreaFiguras.bind(this);
    }

    
    formularioCalcularArea(request, reponse) {
        reponse.render('area');
    }

    // calcular área y perímetro
    calcularAreaFiguras(request, reponse) {
        const { figura, base, altura, apotema, lado } = request.body;
        let resultado = {
            area: 0,
            perimetro: 0
        };

        if (figura === 'cuadrado') {
            resultado.area = this.figuraServices.calcularAreaCuadrado(Number(lado));
            resultado.perimetro = this.figuraServices.calcularPerimetroCuadrado(Number(lado));
        } else if (figura === 'triangulo') {
            resultado.area = this.figuraServices.calcularAreaTriangulo(Number(base), Number(altura));
            resultado.perimetro = this.figuraServices.calcularPerimetroTriangulo(Number(lado));
        } else if (figura === 'pentagono') {
            resultado.area = this.figuraServices.calcularAreaPentagono(Number(base), Number(apotema));
            resultado.perimetro = this.figuraServices.calcularPerimetroPentagono(Number(lado));
        }

        reponse.render('area', { resultado });
    }
}

export default FiguraController;

