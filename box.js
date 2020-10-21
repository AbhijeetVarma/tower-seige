class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.5
       
        
    }
    this.image = loadImage("boxes.png")
    this.width = 20;
    this.height = 30;
    this.body = Bodies.rectangle(x, y,this.width,this.height, options);
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle
    

    if(this.body.speed<4){
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill(51,21,88)
      rect(0,0, this.width, this.height);
      pop();
}else{

     World.remove(world,this.body);
     push();
   
    this.visibility = this.visibility - 1
      tint(255,this.visibility)
   //rect(0,0, this.width, this.height);
    pop();
}
  }
};


