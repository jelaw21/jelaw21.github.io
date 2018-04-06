var TopDown = TopDown || {};

TopDown.Preload = function(){};

TopDown.Preload.prototype = {
    preload: function(){
        //show loading screen
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        //load game assets
        this.load.tilemap('level1', 'assets/tilemaps/top-down.JSON', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('gameTiles', 'assets/images/tiles.png');
        this.load.spritesheet('player', 'assets/images/charMovement.png', 16, 16);
        this.load.image('chest','assets/images/chest.png');
        this.load.image('coin', 'assets/images/coin.png');
        this.load.image('goldDoor', 'assets/images/goldDoor.png');
        this.load.image('key', 'assets/images/key.png');
        this.load.image('sign', 'assets/images/signPost.png');

    },
    create: function(){
        this.state.start('Game');
    }
}