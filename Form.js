class Form {
    constructor(){
        this.logoImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYR-aaLVE0D91SYD1zno4C7IrExeWmMTUzXm_CzX_WPyi6fJJgafiUzFoD5AHkqcbMKEc&usqp=CAU";
        this.greeting = createElement("h3");
        this.logo = createImg(this.logoImg);
        this.button = createButton("Play");
    
    }
    display(){
        this.greeting.position(width/3,3*height/4);
        this.greeting.html("Panchito un carro alocado esquiva los óbstaculos de las calles de la ciudad ayuda a panchito a esquivar los peligros de las calles");
        this.logo.position(width/2,height/10);
        this.button.position(width/2,2*height/3);
        this.button.class("playButton")
    
        this.button.mousePressed(()=>{
            gameState = 1;
            this.logo.hide();
            this.button.hide();
            this.greeting.hide();
    });
    }
}