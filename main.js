/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require("express");
var app = new express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

