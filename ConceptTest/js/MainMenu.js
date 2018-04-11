class MainMenu extends Phaser.Scene {

    constructor(config){
        super({key: 'MainMenu'});
    }
    preload (){

    }

    create (){

        var title = this.add.image(game.config.width/2, (game.config.height/2)-125, 'title').setAngle(-20);
        var button = this.add.image(game.config.width/2, game.config.height/2 + 100, 'button').setInteractive();
        var startText = this.add.text(0,0,'START', {fontSize: '24px', fontFamily: 'UnifrakturCook', fill: '#000'});
        Phaser.Display.Align.In.Center(startText, button);

        this.tweens.add({
            targets: title,
            angle: 20,
            duration: 5000,
            yoyo: true,
            repeat: -1,

        })



    }

    update(){

    }
}


/*var Test = Test || {};

Test.MainMenu = function(){};

Test.MainMenu.prototype = {

    create: function(){

        this.title = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'title');
        this.title.anchor.setTo(0.5);
        this.title.scale.setTo(0.7, 0.7);
        var text = "Click to begin";
        var style = {font: "15px Arial", align: "center", fill: "#fff"};
        var t = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
        t.anchor.set(0.5);
    },
    update: function(){
        if(this.game.input.activePointer.justPressed()){
            this.game.state.start('Level1');
        }
    }

};*/