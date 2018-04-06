var TopDown = TopDown || {};

TopDown.Game = function(){};

TopDown.Game.prototype  = {

    create: function(){

        this.map = this.game.add.tilemap('level1');



    }

}