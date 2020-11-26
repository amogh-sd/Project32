class Box extends BaseClass {
  constructor(x, y, width, height){
    isStatic: false

    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");

  }

};
