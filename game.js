import MainScene from "./Scene.js"

const config = {
    
    width: 1280,
    height: 1280,
    type: Phaser.AUTO,
    parent: 'GameBox',
    scene: [MainScene]
    
}

new Phaser.Game(config);