class Bob { 
    constructor(x,y,r) {
      
       var options={ 
         isStatic:false,
         restitution:1, 
         friction:0.1,
         density:1.2
         } 
         this.body=Bodies.circle(x, y, 20, options) 
         this.radius=50
        World.add(world, this.body); 
        }
         display() { 
           var pos=this.body.position;
           rectMode(CENTER)
           fill("green")
           circle(pos.x, pos.y, 40);
          }
         }