// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {

    })
  },
  playFirst: function(){
    //debugger;
    if( this.first() ) {
      this.first().play();
    }
  }

});