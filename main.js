
var canvas = new fabric.Canvas('myCanvas');

px = 10;
py = 10;

biw = 30;
bih = 30;

po = "";
bio = "";

function pu()
{
    fabric.Image.fromURL("player.png", function(Img){
        po = Img;

        po.scaleToWidth(150)
        po.scaleToHeight(140)
        po.set({
            top:py,
            left:px
        })
        canvas.add(po);

    })
}

function ni(gi)
{
    fabric.Image.fromURL(gi, function(Img){
        bio = Img;

        bio.scaleToHeight(bih)
        bio.scaleToWidth(biw)
        bio.set({
            top:py,
            left:px
        })
        canvas.add(bio);
    })
}

window.addEventListener("keydown", function(e){
    kp = e.keyCode;
    // document.getElementById("key_value_h4").style.display = "inline-block";
    if(e.shiftKey == true && kp == '80'){
        biw = biw +10;
        bih = bih+10
        document.getElementById("width").innerHTML = biw;
        document.getElementById("height").innerHTML = bih;
    }

    if(e.shiftKey == true && kp == '77'){
        biw = biw - 10;
        bih = bih - 10;
        document.getElementById("width").innerHTML = biw;
        document.getElementById("height").innerHTML = bih;
    }
    if(kp=='38'){
        up()
    }
    if(kp=='40'){
        down()
    }
    if(kp=='37'){
        left()
    }
    if(kp=='39'){
        right()
    }
    if(kp=='65'){
        ni('roof.jpg')
    }
    if(kp=='66'){
        ni('trunk.jpg')
    }
    if(kp=='67'){
        ni('wall.jpg')
    }
    if(kp=='68'){
        ni('yellow_wall.png')
    }
    if(kp=='69'){
        ni('unique.png')
    }
    if(kp=='70'){
        ni('cloud.jpg')
    }
    if(kp=='71'){
        ni('dark_green.png')
    }
    if(kp=='72'){
        ni('light_green.png')
    }
    if(kp=='73'){
        ni('ground.png')
    }
    function up(){
        if(py>=0){
            py = py - bih
            canvas.remove(po)
            pu()
        }
    }
    function down(){
        if(py<=500){
            py = py + bih
            canvas.remove(po)
            pu()
        }
    }
    function left(){
        if(px>=0){
            px = px - biw
            canvas.remove(po)
            pu()
        }
    }
    function right(){
        if(px<=900){
            px = px + biw
            canvas.remove(po)
            pu()
        }
    }
})