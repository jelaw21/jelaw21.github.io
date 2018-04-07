var game = new Phaser.Game(160, 150, Phaser.AUTO, "", {preload:preload, create: create, update:update, render: render});

function preload(){

    game.load.tilemap('map', 'assets/tilemaps/top-down-test.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/images/tiles.png');
    game.load.image('coin', 'assets/images/coin.png');
    game.load.spritesheet('player', 'assets/images/charMovement.png', 16, 15);

}

var map;
var coins;
var cursors;
var walk;

var layer;
var blocked;
var player;


function create(){
    //testing cache clearing ....
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    map = game.add.tilemap('map');

    map.addTilesetImage('tiles');

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //layer = map.createLayer('backgroundLayer');
    blocked = map.createLayer('blockedLayer');
    map.setCollisionBetween(574, 576, true, blocked);
    blocked.resizeWorld();



    coins = game.add.group();
    coins.enableBody = true;

    for(var i = 0; i < 3520; i++){
        map.createFromObjects('objectLayer', i, 'coin', 0,true,false, coins);
    }



    player = game.add.sprite(31, 289, 'player');
    player.anchor.set(0.5, 0.5);

    walk = player.animations.add('walk');

    game.physics.arcade.enable(player);

    player.body.setSize(16,16, 0, 0);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();

}

function update(){

    game.physics.arcade.collide(player, blocked);
    game.physics.arcade.overlap(player, coins, collectCoin, null, this);

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if(cursors.left.isDown){
        player.body.x -= 1;
        //player.angle = 180;
        player.scale.y = -1;
        player.animations.play('walk', 30, true);
    }else if(cursors.right.isDown){
        player.body.x += 1;
        //player.angle = 0;
        player.scale.y = -1;
        player.animations.play('walk', 30, true);
    }
    if(cursors.right.isUp){
        player.animations.stop('walk', true);
    }

    if(cursors.up.isDown){
        player.body.y -= 1;
    }
    else if(cursors.down.isDown){
        player.body.y += 1;
    }
}

function collectCoin(player, coin){
    coin.kill();
}

function render(){
    //game.debug.body(sprite);
}