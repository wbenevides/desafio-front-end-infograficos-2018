//const json = require('./noticias.json');
import '../assets/JSON/noticias.json';
import './style';//carrega os arquivos de olha de estilo
import { currentInstance } from "./controllers/EditoriaController";
var editoriaController = currentInstance();
var oderna = editoriaController.ordena.bind(editoriaController);
document.querySelector("#ordenar").onclick = oderna