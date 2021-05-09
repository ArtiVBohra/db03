class Form{
    constructor(){

        this.button = createButton("PLAY");
        this.input= createInput("name");
        this.greeting=createElement("h3");
    }
 hide_details(){

    this.greeting.hide()
    this.input.hide()
    this.button.hide()
 }
    display(){
var title = createElement("h2")
title.html("car game");
title.position (130,10);

this.input.position(130,160)

this.button.position(250,200)



this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name = this.input.value();
playerCount+=1
player.index= playerCount
player.update()
player.updateCount(playerCount)
this.greeting.html("welcome " + player.name)
this.greeting.position(230,200)

});
    }
}