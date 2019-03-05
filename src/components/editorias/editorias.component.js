import { Component } from '../component';
import { DateConverter } from '../../util/dateHelpers';
import { Bind } from "../../util/Bind";
import { Noticias } from "./editoria/noticias";
import "./editoriais.scss";

export class EditoriasComponent extends Component {
    constructor(_parentElement) {
        super(_parentElement);
        this._editoria = new Bind(
            new Noticias(),
            this,
            'esvazia', 'adiciona', 'ordena', 'filtra'
        );
        return this._editoria;
    }

    render(model) {
        if (!model.noticias) return;
        //sconsole.log(model.noticias)
        return model.noticias.map(noticia =>
            `<div class="noticia__content">
                    <div class="noticia__item">
                        <div class="noticia__item--header">
                            <span class="item__header--data">${DateConverter.paraTexto(noticia.data)}</span>
                            <span class="item__header--editoria">${noticia.editoria}</span>
                        </div>
                        <div class="noticia__item-img">
                            <img src="assets/img/noticias/${noticia.foto}">
                        </div>
                        <h2 class="noticia__item--titulo">${noticia.titulo}</h2>
                        <div class="noticia__item--conteudo">
                            <p>
                            ${noticia.texto}
                            </p>
                            <div class="">
                                <a href="#">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
        ).join('')
    }

}

