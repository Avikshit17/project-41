class Droplet
{
    constructor(x,y)
    {
        var features={
            isStatic:false,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,10,features)
        World.add(myWorld,this.body)
    }
    display()
   {
       push ()
       translate(this.body.position.x,this.body.position.y)
       rotate (this.body.angle)
       ellipseMode(CENTER)
       fill("blue")
       ellipse(0,0,10)
       pop ()
   }
}