class  Pillar3{
    constructor(x,y,width , height){
       var Pillar3_options ={
        isStatic:true
       }
    
    this.body = Bodies.rectangle(x,y,width , height , Pillar3_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill("black");
        rect(0,0,this.width , this.height);
        pop();
    }
};