'use strict';

const axios = require('axios');

const userPolicy = async policyId => {
  try {
    const resClients = await axios.get(
      'http://www.mocky.io/v2/5808862710000087232b75ac'
    );
    const resPolicies = await axios.get(
      'http://www.mocky.io/v2/580891a4100000e8242b75c5'
    );

    const policyRequired = resPolicies.data.policies.filter(
      policy => policy.id === policyId
    );

    const person = resClients.data.clients.filter(
      client => client.id === policyRequired[0].clientId
    );

    return person[0].name;
  } catch (error) {
    return error.message;
  }
};

userPolicy()
  .then(message => console.log(message))
  .catch(error => console.log(error));
