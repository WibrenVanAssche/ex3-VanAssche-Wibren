/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require("express");
var app = new express();
var bodyParser = require('body-parser');



function calculate (){
        answer = eval(command);
        document.getElementById("scherm").innerHTML = answer;
        command = answer.toString();

    }

function backslash (){
        command = command.slice(0,-1);
        document.getElementById("scherm").innerHTML = command;
    }

function reset () {
        location.reload();
    }
    
window.onerror = function(msg, linenumber) {
    alert('Error message: '+msg);
    return true;
