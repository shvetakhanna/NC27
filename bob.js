class bob{
    constructor(x,y)
    {
        var options={
            restitution:1,
            density:1,
            friction:0.8         
         
                    }
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
 display()
 {
     var k=this.body.position;
     fill ("yellow");
     ellipseMode (CENTER)
     ellipse(k.x,k.y,40,40);
 }



}
