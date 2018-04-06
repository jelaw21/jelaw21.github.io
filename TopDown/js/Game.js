var TopDown = TopDown || {};

TopDown.Game = function(){};

TopDown.Game.prototype  = {

    create: function(){

        this.map = this.game.add.tilemap('level1');

        //first parameter is name in Tiled
        this.map.addTilesetImage('tiles', 'gameTiles');

        //create layer
        this.backgroundLayer = this.map.createLayer('backgroundLayer');
        this.blockedLayer = this.map.createLayer('blockedLayer');

        //collision on blockedLayer
        this.map.setCollisionBetween(1, 2000, true, 'blockedLayer');

        this.backgroundLayer.resizeWorld();

    }

};