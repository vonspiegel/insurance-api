'use strict';

const axios = require('axios');

const dataById = async () => {
  try {
    const res = await axios.get(
      'http://www.mocky.io/v2/5808862710000087232b75ac'
    );

    const clients = res.data.clients;
    const clientId = clients.map(client => {
      return client.id;
    });

    return clientId;
  } catch (error) {
    return error.message;
  }
};

dataById()
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  });
