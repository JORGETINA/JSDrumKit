
//Erkennung Button Press - test comment

    var numberOfDrumButtons = document.querySelectorAll(".drum").length;

    for (var i = 0; i<numberOfDrumButtons; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("click", function () {

            var buttonInnerHTML = this.innerHTML;

            makeSound(buttonInnerHTML);

           // buttonAnimation(buttonInnerHTML);

        });
    }
//Erkennung Keyboard Press

    document.addEventListener("keypress", function (event) {

        makeSound(event.key);
        //buttonAnimation(event.key);

    });


    function makeSound(key) {

        console.log(key);
        switch (key) {
            case "l":
            case "Lion":
                var l = new Audio("sounds/lion.mp3");
                l.play();
                break;

            case "w" :
            case "Wolf":
                var w = new Audio("sounds/wolf.mp3");
                w.play();
                break;

            case "c":
            case "Cat":
                var c = new Audio("sounds/cat.mp3");
                c.play();
                break;


            default: console.log("Could not find  " + key);
        }
}
//function buttonAnimation(currentKey) {}


