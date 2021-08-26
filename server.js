const { createServer } = require('http'); 
const url = require('url'); 
const axios = require('axios'); 
const chalk = require('chalk');

const headers = {
    'Content-Type': 'applicatio/json', 
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Methods': 'GET', 
};