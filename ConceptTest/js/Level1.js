Test = Test || {};

Test.Level1 = function(){};

Test.Level1.prototype = {

    create: function(){

        this.map = this.add.tilemap('forest');
        this.map.addTilesetImage('backgroundTiles1');
        this.map.addTilesetImage('backgroundTiles2');

        this.grass = this.map.createLayer('grassLayer');




       this.grass.resizeWorld();

    }



};