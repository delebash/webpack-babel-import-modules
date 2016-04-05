import Greeting from './Greeting.js';
import DateTime from './DateTime.js';
import $ from 'jquery'

// var h1 = document.querySelector('h1');
// h1.textContent = new Greeting();

// var h2 = document.querySelector('h2');
// h2.textContent = new DateTime();

$(document).ready(function () {
    console.log("ready!");
    $('h2').text(new DateTime);
    $('h1').text(new Greeting());

});