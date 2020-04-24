class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      fill('red');
      rect(160,350,130,40,);
      
      fill('black');
      circle(100,382,100);

      
    };
}
