const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/foot-api', { useNewUrlParser: true });
const db = mongoose.connection;
const Team = require('../models/team');

class TeamService{
  static async creat(data){
    const team = new Team(data);
    return await team.save();
  }

static async retrieve(id){
let data;
 if(id){
   data = await Team.findById(id).exec();
 }else {
   data = await Team.find().exec();
 }

 return data;
}




static async update(id ,data){
   const team = await Team.findByIdAndUpdate(id, data {
     new : true,
     runValidators: true
   });
   if(!team){
     throw new Error('cant updata updata');
   }

   return team
}





static async delete(id){
const delet = await Team.findOneAndDelete(id).exec();
if(!delet){
  throw new Error('sorry cant delet data')
}
return delet;
}

}



module.exports = TeamService;
