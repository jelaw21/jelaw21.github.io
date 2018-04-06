var TopDown = TopDown || {};

TopDown.game = new Phaser.Game(160, 160, Phaser.AUTO, '');

TopDown.game.state.add('Boot', TopDownGame.Boot);
TopDown.game.state.add('Preload', TopDownGame.Preload);
TopDown.game.state.add('Game', TopDownGame.Game);

TopDown.game.state.start('Boot');