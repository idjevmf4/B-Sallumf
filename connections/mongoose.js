const mongoose = require('mongoose');

const Connect = (url, user, pass, data) => {

  mongoose.connect(`${url}/${data}`,
  {
    user: user,
    pass: pass,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  ).then(() => {
    console.log('MongoDB Connected');
  }).catch((err) => {
    console.error(err)
  });
};

module.exports = Connect;