class Boot extends Phaser.Scene {

    constructor(config){
        super({key: 'Boot'});
    }

    preload(){
        this.load.image('logo', 'assets/images/gwkLogo.png');
        this.load.image('preloadbar', 'assets/images/gwkPreloadBar.png');
    }
    create(){
        this.scene.start('Preload');
    }

}



/*var Test = Test || {};

Test.Boot = function(){};

Test.Boot.prototype = {

    preload: function(){
        this.load.image('logo', 'assets/images/gwkLogo.png');
        this.load.image('preloadbar', 'assets/images/gwkPreloadBar.png');

    },

    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preload');
    }

};*/