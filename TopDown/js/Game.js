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

        this.createItems();

    },
    createItems: function(){
        this.items = this.game.add.group();
        this.items.enableBody = true;
        var item;
        result = this.findObjectsByType('item', this.map, 'objectLayer');
        result.forEach(function(element){
            this.createFromTiledObject(element, this.items);
        }, this);
    },
    findObjectsByType: function(type, map, layer){
        var result = [];
        map.objects[layer].forEach(function(element){
            if(element.type === type){
                element.y -= map.tileHeight;
                result.push(element);
            }
        });
        return result;
    },
    createFromTiledObject: function(element, group){
        var sprite = group.create(element.x, element.y, element.properties.sprite);

        Object.keys(element.properties).forEach(function(key){
            sprite[key] = element.properties[key];
        });
    }
};