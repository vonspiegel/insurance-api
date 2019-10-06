'use strict';

const axios = require('axios');

const dataId = async insertId => {
  try {
    const res = await axios.get(
      `http://www.mocky.io/v2/5808862710000087232b75ac`
    );

    const clients = res.data.clients.filter(client => {
      return client.id === insertId;
    });

    return clients;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  dataId: dataId()
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.log(error);
    })
};
