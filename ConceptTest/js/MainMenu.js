var Test = Test || {};

Test.MainMenu = function(){};

Test.MainMenu.prototype = {

    create: function(){

        this.title = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'title');
        this.title.anchor.setTo(0.5);
        var text = "Click to begin";
        var style = {font: "15px Arial", align: "center", color: "#fff"};
        var t = this.game.add.text(this.game.width/2, this.game.height/2 + 200, text, style);
        t.anchor.set(0.5);
    },
    update: function(){
        if(this.game.input.activePointer.justPressed()){
            this.game.state.start('Level1');
        }
    }

};