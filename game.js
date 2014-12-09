// create a new Phaser game on an 800x600 screen


var main = {
    // load all the images and sounds
    preload: function() {
        game.stage.backgroundColor = '#71c5cf';	  	
        game.load.image('missionbit', "chicken-wings.jpg");
        game.load.image('obstacle', "poke.jpg");
    },

    // set up the game
    create: function() {
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // create the player using the missionbit image and place it at (100, 245)
        this.player = game.add.sprite(100, 45, 'missionbit');
        
        game.physics.arcade.enable(this.player); 
        this.player.body.gravity.y = 1000;
        
        this.fork =game. add. group ();
        this.fork.enableBody = true;
        this.fork.createMultiple(20, 'obstacle');
        
        var space= game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.add(this.jump, this);
        
        game.time.events.loop(2000,
    this.addFork, this);                          
        
        
    },

    // update the state of the game
    update: function() {
        if(this.player.inWorld==false)
            this.restartGame();
        game.physics.arcade.overlap(this.player, this.fork, this.restartGame, null, this);
  
    },
  
    // makes the player jump
    jump: function() {
        this.player.body.velocity.y = -500;
  
    },

    addFork: function() {0
        var fork = this.fork. getFirstDead();
        
        fork.reset (800, 400);
        fork.body.velocity.x =-200;
        fork.checkWorldBounts = true;                 
        fork.outoBoundSkill= true;                 

    },

    // resest the state of the game
    restartGame: function() {
        game.state.start('default');    
    }
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', main);
game.state.start("default");