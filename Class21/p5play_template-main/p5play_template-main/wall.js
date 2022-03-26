class Wall {
    constructor(x,y,w,h){
        var wall_options = {
            isStatic:true
          }
         this.x = x 
         this.y = y 

        this.w = w 
        this.h = h 

          this.wall = Bodies.rectangle(x,y,w,h,wall_options);
          World.add(world,this.wall)
    }
    show(){
        push()
        rectMode(CENTER)
        rect(this.wall.position.x,this.wall.position.y,this.w,this.h)
        pop()
    }
}