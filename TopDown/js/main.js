var game = new Phaser.Game(200, 150, Phaser.CANVAS, "", {preload:preload, create: create, update:update, render: render});

function preload(){

    game.load.tilemap('map', 'assets/tilemaps/top-down2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/images/tiles.png');
    game.load.image('coin', 'assets/images/coin.png');
    game.load.spritesheet('player', 'assets/images/charMovement.png', 16, 15);

}

var map;
var coins;
var cursors;
var walk;

var layer;
var sprite;


function create(){

    map = game.add.tilemap('map');

    map.addTilesetImage('tiles');

    map.setCollisionBetween(1, 100);

    layer = map.createLayer('backgroundLayer');
    layer.resizeWorld();

    game.physics.startSystem(Phaser.Physics.ARCADE);

    coins = game.add.group();
    coins.enableBody = true;

    map.createFromObjects('objectLayer', 2, 'coin', 0,true,false, coins, null, true);


    sprite = game.add.sprite(31, 289, 'player');
    sprite.anchor.set(0.5);

    walk = sprite.animations.add('walk');

    game.physics.arcade.enable(sprite);

    sprite.body.setSize(32,32,0,0);

    game.camera.follow(sprite);

    cursors = game.input.keyboard.createCursorKeys();

}

function update(){

    game.physics.arcade.collide(sprite, layer);
    game.physics.arcade.overlap(sprite, coins, collectCoin, null, this);

    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;

    if(cursors.left.isDown){
        sprite.body.x += 1;
    }
    else if(cursors.right.isDown){
        sprite.body.x -= 1;
    }
    if(cursors.up.isDown){
        sprite.body.y -= 1;
    }
    else if(cursors.down.isDown){
        sprite.body.y += 1;
    }
}

function collectCoin(player, coin){
    coin.kill();
}

function render(){
    game.debug.body(sprite);
}