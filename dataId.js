'use strict';

const axios = require('axios');

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
