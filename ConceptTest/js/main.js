var Test = Test || {};

Test.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "");

Test.game.state.add('Boot', Test.Boot);
Test.game.state.add('Preload', Test.Preload);
Test.game.state.add('MainMenu', Test.MainMenu);
Test.game.state.add('Level1', Test.Level1);
Test.game.state.add('Level2', Test.Level2);

Test.game.state.start('Boot');
