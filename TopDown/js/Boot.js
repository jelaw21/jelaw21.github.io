var TopDown = TopDown || {};

TopDown.Boot = function(){};

TopDown.Boot.prototype = {

    preload: function(){

        this.load.image('preloadbar', '/assets/images/preloader-bar.png');

    },

    create: function(){
        this.game.stage.backgroundColor = '#fff';

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.state.start('Preload');
    }


};