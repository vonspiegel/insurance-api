'use strict';

const axios = require('axios');

const listPolicies = async name => {
  try {
    const resClients = await axios.get(
      'http://www.mocky.io/v2/5808862710000087232b75ac'
    );
    const resPolicies = await axios.get(
      'http://www.mocky.io/v2/580891a4100000e8242b75c5'
    );

    const id = resClients.data.clients.filter(client => {
      client.name === name;
      return client.id;
    });

    const listOfPolicies = resPolicies.data.policies.reduce(policy => {
      policy.clientId === id;
      return policy;
    });

    return listOfPolicies;
  } catch (error) {
    return error.message;
  }
};

listPolicies()
  .then(message => console.log(message))
  .catch(error => console.log(error));
