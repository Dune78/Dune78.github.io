
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { 
    preload: function() {
        
        game.load.audio('growl', 'growl.wav');
        
        game.stage.backgroundColor = '#fff'
        game.load.image('wolf', 'wolf3.png');
        game.load.image('background', 'Green Rosary.jpg');
    }, 
    create: function() {
        this.background=game.add.sprite(0,0, 'background');
        
        this.wolf = game.add.sprite(game.world.centerX, game.world.centerY, 'wolf');
       
        this.music = game.add.audio('growl');

        var space= game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.add(this.howl, this);

    }, 
    
    howl:function(){
         this.music.play();
    },
    
    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {
            this.wolf.x -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
        {
            this.wolf.x += 4;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
        {
            this.wolf.y -= 4;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
        {
            this.wolf.y += 4;
        }                           
    }
});

 