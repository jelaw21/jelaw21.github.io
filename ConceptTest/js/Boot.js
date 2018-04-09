var Test = Test || {};

Test.Boot = function(){};

Test.Boot.prototype = {

    preload: function(){
        this.load.image('logo', 'assets.images/GWK.png');
        this.load.image('preloadbar', 'assets/images/smoke.jpg');

    },

    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 512;
        this.scale.minHeight = 384;
        this.scale.maxWidth = 1280;
        this.scale.maxHeigt = 640;

        this.scale.pageAlignHorizontally = true;
        this.scale.setScreenSize(true);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preload');
    }

};