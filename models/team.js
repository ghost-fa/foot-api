const mongoose = require('mongoose');

const TeamSheme = new mongoose.shema({
  name: {
    type: String,
    required: true
  },
  city:String,
  country: String,
  color:{
    type:[String],
    validate: {
    validator: (array) => {
      return array.length > 0;
    }
  }
},
cotch:{
  type:{
    first:String,
    last:String
  }

}

})

module.exports = mongoose.model('Team', TeamService)
