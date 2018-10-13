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
}

static async update(id ,data){

}

static async delete(id){

}

}



module.exports = TeamService;
