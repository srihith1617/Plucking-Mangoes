class stone  {
    constructor (x,y,width,height) {
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:false, restitution:0, friction:1,density:1.2});
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image= loadImage("stone.png");   
     }
    display() {
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}