class mango  {
    constructor (x,y,radius) {
        this.body=Bodies.circle(x,y,radius,{isStatic:true, restitution:0, friction:1});
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image= loadImage("mango1.png");
        }
    display() {
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}