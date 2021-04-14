class Ball{
    constructor(x,y,r){

        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
    }
    this.body=Bodies.circle(x,y,r)
    this.x=x;
    this.y = y;
    this.r=r;
    this.image=loadImage("polygon.png")
    World.add(world, this.body);
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(CENTER);
    imageMode(CENTER);
    image(this.image, 0,0,this.r*2, this.r*2)
    pop();
  }
}