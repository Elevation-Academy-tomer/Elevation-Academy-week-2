///// jquery ////
//// Exercise 1////
/*
$("#button").on('click', function(){
    let val = $("#input").val();
    let newLi = $(`<li class="humans">${val}</li>`)
    $("#ul").append(newLi)
})

//// Exercise 2////

$("body").on('click', '.humans' , function(){
    $(this).remove(".humans");
})

//// Exercise 3////


const makeDiv = (id) => {
    let box = $(`<div class=box id=${id}></div>`);
    $("body").append(box);
}

$("body").on('mouseover', '.box' , function(){
    let id  = $(this).attr('id');
    let id2 =0;
    if (id == 2){
        id2 = id -1;
        $(`#${id}`).css("background-color" , "red")
        $(`#${id2}`).css("background-color" , "#8e44ad");
    }
    else{
        id2 = 2;
        $(`#${id}`).css("background-color" , "red")
        $(`#${id2}`).css("background-color" , "#8e44ad");
    }
})

const sendDivToCreation = () => {
    let i = 2
    while (i > 0) {
        makeDiv(i);
        i--;
    }
}

sendDivToCreation()
*/
/*
//// Exercise 4////
let i = 0;
    const checkI = function(){
        i++;
        return i;
    }
    $("body").on("click" , ".item", function(){
        let data  = $(this).attr('data-instock');
        let i = checkI();
        let spacielString = "X" + i;
        if(data == "true"){
            let text = $(this).text() 
            let newCartItem = $(`<div class=cart-item>${text + spacielString}</div>`);
            i++;
            $("#cart").append(newCartItem);
        }
        else{
            alert("You can't add this item to the cart")
        }
    })

    $("body").on('click', '.cart-item' , function(){
        i--;
        $(this).remove(".cart-item");
    })
*/
/*
//// Exercise 5////

const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]

for(let f of fruits){
    let name = f.name;
    let color = f.color;
    let newDiv = $(`<div class=${color}>${name}</div>`);
    $("#basket").append(newDiv);
}



//// EXTENSIONS 1 ///

const spanArray = document.getElementsByTagName("span");

for(let s of spanArray){
    let color = $(s).data().color;
    $(s).addClass("picker");
    $(s).css("background-color" , color);
}

$("body").on("click", ".picker", function(){
    let color = $(this).data().color;
    $(".box").css("background-color" , color);
})



//// Data Flow ////

const posts = [{name : "tome", text: "yyybsj"},{name : "Alon", text: "sdsdsdsd"} ];

const render = () => {
    for(let p of posts){
        let newDiv = $(`<div class="post-item">Name : ${p.name} text : ${p.text}</div>`);
        $("#posts").append(newDiv);
    }
}

$("#button").on("click" , function(){
    let nameValue = $("#name").val();
    let wish = $("#wish").val();
    posts.push({
        name : nameValue,
        text : wish
    })
    $("#posts").empty();
    render();
})

render();
*/