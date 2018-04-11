var scenes = [];

scenes.push(Boot);
scenes.push(PreloadScene);
//scenes.push('MainMenu');
//scenes.push('Level1');
//scenes.push('Level2');

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: scenes
};

var game = new Phaser.Game(config);

/*var Test = Test || {};

Test.game = new Phaser.Game(800, 400, Phaser.AUTO, "");

Test.game.state.add('Boot', Test.Boot);
Test.game.state.add('Preload', Test.Preload);
Test.game.state.add('MainMenu', Test.MainMenu);
Test.game.state.add('Level1', Test.Level1);
Test.game.state.add('Level2', Test.Level2);

Test.game.state.start('Boot');*/
