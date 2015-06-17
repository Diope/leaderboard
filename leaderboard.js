PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find()
    },
    'song': function(){
      return "Wait & See"
    },
  });
  Template.leaderboard.events({
    'click .player': function () {
      var playerId = this. _id
      Session.set('selectedPlayer', playerId);
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer)
    }
  });
}

if(Meteor.isServer){
  console.log("Hello server");
}