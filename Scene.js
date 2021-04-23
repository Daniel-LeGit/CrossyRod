import Car from "./car.js"
export default class MainScene extends Phaser.Scene {
    
    constructor() {
        
        super('MainScene');
        
    }
    
    init() {
        
        this.input.on('pointerdown', e => {this.movePlayer(e)});
        this.input.on('pointerup', e => {this.stopPlayer(e)});
        
        this.playerIsMoving = false;
        this.playerVelocity = 3;
        
        this.carSpeed = 3;
        
    }
    
    movePlayer(event){
        
        this.playerIsMoving = true;
        
        
    }
    
    stopPlayer(event){
        
        this.playerIsMoving = false;
        
        
    }
    
    preload() {
    
    this.load.image('background', './IMGS/map.png');
    this.load.image('player', './IMGS/character_blonde_green.png');
    this.load.image('yellow.car', './IMGS/car_yellow_1.png');
    this.load.image('motorcycle', './IMGS/motorcycle_green.png');
    
    }
    
    create() {
        
        let bg = this.add.sprite(0, 0, 'background');
        
        // V 3 ways of putting background img properly  V     
        bg.setOrigin(0);
        //bg.setPosition(
        
        //this.game.config.width/2,
        //this.game.config.height/2
        
        //);
        
        //bg.x = this.game.config.width/2;
        //bg.y = this.game.config.height/2;
        
        this.car002 = this.add.sprite(
            
            
            1 * 128 - 64,
            6 * 128 + 64,
            'yellow.car'
        
        
        );
        
        //car002.setFlip(true, false);
        this.car002.flipX = true;
        
        //car002.angle = 5;
        
        //car002.setRotation(Math.PI/4);
        
        this.add.sprite(
        
        this.game.config.width / 2,
            70,
            'motorcycle'
        
        );
        
        this.player = this.add.sprite(640, 1225, 'player');
        player.depth = 1;
        this.cars = [];
        this.cars.push()
        this.car001 = this.add.existing (
        
            new Car(this,
                   10 * 128 -64,
                    2* 128 + 64,
                    'yellow.car',
                    true
                   
                   
                   
                   )
        
        )
        
        this.car001 = this.add.sprite(
            
            
            10 * 128 - 64,
            2 * 128 + 64,
            'yellow.car'
        
        
        );
        
    }
    
    update(time) {
    
    //car growth
    //if(this.car002.scaleX < 5){
    //    
    //    this.car002.scaleX += 0.01;
    //    this.car002.scaleY += 0.01;
    //    
    //}
    
        if (this.playerIsMoving){
            
            this.player.y += -this.playerVelocity;
            
        }
        
        if(this.car001.x <= -64 || this.car001.x >= this.game.config.width + 64)
        {
            
            this.car001.flipX != this.car001.flipX;
            
        }
        
        
        //if(this.car001.flipX == true){
        //    
        //this.car001.x += this.carSpeed;
        //    
        //} else {
        //    
        //this.car001.x += -this.carSpeed;
        //    
        //    
        //}
        
        this.car001.x +=
            this.car001.flipX === true ?
                this.carSpeed:
                -this.carSpeed;
        
        //condition = ?
        //true = : 
        
        
        let playerRect = this.player.getBounds();
        let motorcycleRect = this.motorcycle.getBounds();
        
        if(Phaser.Geom.Intersects.RectangleToRectangle(
        
        playerRect, motorcycleRect
        
        )){
            
            console.log("Nyoom");
            this.scene.restart();
        }
        
        for(let i = 0; i < this.cars.length; i++){
            
            if(this.cars[init].overlaps(this.player)) {
                
                
                
            }
            
        }        
    }
    
    
}