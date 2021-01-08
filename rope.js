class rope{
	constructor(body1,pointB)
	{
		var options={
			bodyA:body1,
			pointB:pointB,
			//stiffness:0.08,
			//length:10
		}
		this.pointB=pointB;
  this.sling=Constraint.create(options);
  World.add(world,this.sling);
	}
	display()
	{
		var pointA=this.sling.bodyA.position;
		var point1=this.pointB;
		stroke ("white");
		strokeWeight(3);
		line (pointA.x,pointA.y,point1.x,point1.y);
}
}