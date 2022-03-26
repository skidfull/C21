class Ball {
    constructor(){
        var ball_options = {
            restitution:0.4,
            friction:0.02
          }
         
          this.ball = Bodies.circle(220,10,10,ball_options);
          World.add(world,this.ball)
    }
    show(){
        push()
        ellipse(this.ball.position.x,this.ball.position.y,10)
        pop()
    }
}