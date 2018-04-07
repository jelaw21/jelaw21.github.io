var game = new Phaser.Game(160, 150, Phaser.AUTO, "", {preload:preload, create: create, update:update, render: render});

function preload(){

    game.load.tilemap('map', 'assets/tilemaps/top-down2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/images/tiles.png');
    game.load.image('coin', 'assets/images/coin.png');
    game.load.image('chest','assets/images/coin.png');
    game.load.image('gDoor', 'assets/images/goldDoor.png');
    game.load.image('key', 'assets/images/key.png');
    game.load.image('sign', 'assets/images/signPost.png');
    game.load.spritesheet('player', 'assets/images/charMovement.png', 16, 15);

}

var map;
var items;
var cursors;
var walk;
var objects;
var layer;
var blocked;
var player;
var level1Key = false;


function create(){
    //testing cache clearing ....
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.physics.startSystem(Phaser.Physics.ARCADE);

    map = game.add.tilemap('map');
    map.addTilesetImage('tiles');

    layer = map.createLayer('backgroundLayer');
    blocked = map.createLayer('blockedLayer');

    map.setCollisionBetween(1, 3520, true, blocked);



    blocked.resizeWorld();



    items = game.add.group();
    items.enableBody = true;



    map.createFromObjects('objectLayer', 2096, 'coin', 0,true,false, items);
    map.createFromObjects('objectLayer', 2245, 'sign', 0, true, false, items);

    player = game.add.sprite(31, 289, 'player');
    player.anchor.set(0.5, 0.5);

    walk = player.animations.add('walk');

    game.physics.arcade.enable(player);

    player.body.setSize(4,12, 6, 2);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();

}

function update(){

    game.physics.arcade.collide(player, blocked);
    game.physics.arcade.collide(player, items, collectCoin, null, this);

    if(cursors.left.isDown){
        player.body.velocity.x = -50;
        player.angle = 180;
        player.scale.y = -1;
        player.animations.play('walk', 30, true);
    }else if(cursors.right.isDown){
        player.body.velocity.x = 50;
        player.angle = 0;
        player.scale.y = 1;
        player.animations.play('walk', 30, true);
    }
    if(cursors.right.isUp && cursors.left.isUp){
        player.animations.stop('walk', true);
        player.body.velocity.x = 0;
    }

    if(cursors.up.isDown){
        player.body.velocity.y = -50;
    }
    else if(cursors.down.isDown){
        player.body.velocity.y = 50;
    }
    if(cursors.up.isUp && cursors.down.isUp){
        player.body.velocity.y = 0;
    }
}

function collectCoin(player, item){

    if(item.key == 'coin'){
        item.kill();
    }
    if(item.key == 'sign'){
        item.body.velocity.x = 0;
        item.body.velocity.y = 0;
        console.log('SIGN');
    }
}

function render(){
    //game.debug.body(sprite);
}