class Man
{
    constructor()
    {
        var features={
            isStatic:true
        }
        this.body=Bodies.rectangle(200,300,200,200,features)
        World.add(myWorld,this.body)
    }
   display()
   {
       push ()
       rotate (this.body.angle)
       imageMode(CENTER)
       image(walkingImage,200,300,200,200)
       pop ()
   }
}

