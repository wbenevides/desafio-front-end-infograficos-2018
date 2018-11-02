import { HttpService } from '../../util/HttpService.js';
import { ApplicationException } from '../../util/ApplicationException.js';
import { resolveEditoriaAPI } from "../editoria/Editoria";
import { ordenaRecentes } from "../editoria/Noticias";
import "../../util/arrayHelpers";

const NOTICIAS_URL = "assets/JSON/noticias.json";
const FOTOS_URL = "assets/JSON/slide.json";

export class EditoriaService {

    constructor() {
        this._http = new HttpService();
    }

    obtemNoticias() {

        return this._http
            .get(NOTICIAS_URL)
            .then(dados => dados[0]['Editorias'])
            .then(editorias =>
                editorias.map(editoria =>
                    resolveEditoriaAPI(editoria)
                ).$flat().sort(ordenaRecentes),
                err => {

                    throw new ApplicationException('Não foi possível obter as negociações da semana');
                }
            );
    }

    obtemSlides() {
        return this._http
            .get(FOTOS_URL)
            .then(
                dados => dados[0]['imagens'],
                err => {

                    throw new ApplicationException('Não foi possível carregar as imagens do slide');
                });

    }


}