import "../node_modules/materialize-css/dist/css/materialize.css";
import "../styles/materialize.css"
import Materialize from 'materialize-css'

$(document).ready(function () {
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    })
    console.log('materialize loaded')
});