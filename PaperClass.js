class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.3,
          density:1.2,
          friction:0.5

      }
      this.body = Bodies.circle(x,y,this.r/2,options);
      this.x = x;
      this.y = y;
      this.r=r
      World.add(world, this.body);
    }
    display(){
      Push()
      rectMode(CENTER);
      fill("brown");
      ellipse(0,0,this.r,this.y);
      pop()

    }
  };