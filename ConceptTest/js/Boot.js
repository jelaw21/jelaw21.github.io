var Test = Test || {};

Test.Boot = function(){};

Test.Boot.prototype = {

    preload: function(){
        this.load.image('logo', 'assets/images/gwkLogo.png');
        this.load.image('preloadbar', 'assets/images/gwkPreloadBar.png');

    },

    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 512;
        this.scale.minHeight = 384;
        this.scale.maxWidth = 768;
        this.scale.maxHeigt = 512;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preload');
    }

};