Test = Test || {};

Test.Level1 = function(){};

Test.Level1.prototype = {

    create: function(){

        this.game.world.set

        this.map = this.add.tilemap('forest');
        this.map.addTilesetImage('backgroundTiles2');
        this.map.addTilesetImage('backgroundTiles1');


        this.grass = this.map.createLayer('grassLayer');
        this.groundCover = this.map.createLayer('groundCover');
        this.blocked = this.map.createLayer('blockedLayer');

        this.foreground = this.map.createLayer('foregroundLayer');

        this.map.setCollisionBetween(1, 512, true, 'blocked');

        items = game.add.group();
        items.enableBody = true;


        map.createFromObjects('objectLayer',3370,'coin',0,true, false, items);

       //this.grass.resizeWorld();



    }



};