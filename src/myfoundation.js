//No Need to import jquery as it is exposed in webpack.config.js
import "../node_modules/foundation-sites/dist/foundation.css";
import "../styles/foundation.css"
import foundation from 'foundation-sites'

$(document).ready(function () {
    $(document).foundation()
    console.log('foundation lloaded')
});