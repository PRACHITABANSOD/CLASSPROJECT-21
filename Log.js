class Log{
    constructor(speed){
        this.x = random([100,300,500,700,900]);
        this.y = random([0,100]);
        this.width = random ( 500 , 1500 ) ;
        this.height = random (800 ,1000) ;
        this.speed = speed;
        this.spt = createSprite(this.x,this.y,this.width,this.height);
        this.spt.velocityX = this.speed;
        this.spt.shapeColor = "brown";
        this.spt.scale=0.1;
    }

   
}