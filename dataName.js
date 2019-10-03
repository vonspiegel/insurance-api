'use strict';

const axios = require('axios');

const dataName = async insertName => {
  try {
    const res = await axios.get(
      `http://www.mocky.io/v2/5808862710000087232b75ac`
    );

    const clients = res.data.clients.filter(client => {
      return client.name === insertName;
    });

    return clients;
  } catch (error) {
    return error.message;
  }
};

dataName('Maxwell')
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  });
