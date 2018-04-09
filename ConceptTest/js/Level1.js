Test = Test || {};

Test.Level1 = function(){};

Test.Level1.prototype = {

    create: function(){

        this.map = this.add.tilemap('forest');
        map.addTilesetImage('backgroundTiles1');
        map.addTilesetImage('backgroundTiles2');

        grass = map.createLayer('grassLayer');




        grass.resizeWorld();

    }



};