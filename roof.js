class roof
{
	constructor()
	{
		var options=
		{
			isStatic:true
		}
		this.roof=Bodies.rectangle(100,100,250,20,options);
		World.add(world,this.roof)
	}
 display()
 {
	 fill ("yellow");
	 rect(this.roof.position.x,this.roof.position.y,200,20);
 }



}