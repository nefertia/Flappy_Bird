//Initialize Phaser Engine. Create a 400x490xpx Game!

var game= new Phaser.Game(400,490, Phaser.AUTO, 'gameDiv');

//Creating our "main" state that will contain the game
//This is the body of the game itself
//It should contain all code related to the game itself

var mainState = {
  
  preload: function () {
    //This function will execute at the beginning
    //WHich is where we'll lload our assests for the game
    
    //Set the background color of the game
    game.stage.backgroundColor = "#71c5cf";
    
    
  }, 
  
  
  create: function() {
    //This  function is called right after preload function
    //This is where we set up the game assets from earlier
},
  update:function(){
    //This function runs 60 times per second
  },
  
  };
  
//Add start the 'mainState' to start the game
game.state('main', mainState)
game.state.start('main');
}
