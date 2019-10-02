'use strict';

// const rootCas = require('ssl-root-cas/latest').create();

// rootCas
//   .addFile(__dirname + '/ssl/01-cheap-ssl-intermediary-a.pem')
//   .addFile(__dirname + '/ssl/02-cheap-ssl-intermediary-b.pem');

// require('https').globalAgent.options.ca = rootCas;

const axios = require('axios');
const fetch = require('node-fetch');

const dataById = async () => {
  try {
    const res = await axios.get(
      'http://www.mocky.io/v2/5808862710000087232b75ac'
    );

    res.data;
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

dataById();
