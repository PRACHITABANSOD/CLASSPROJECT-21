class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880]);
        this.y = random([320 , 500 ]);
        this.height = random (200,300);
        this.width = random (300,400);     
        this.spt = createSprite(this.x,this.y);
        this.spt.shapeColor = "blue";
        this.spt.scale=0.5;

        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
        }
        this.spt.velocityX = speed;
    }
   
}


