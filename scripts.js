// 4th part
//$(`div`).css(`background-color`, `orange`);
//$(`p`).html(`<strong></strong>`);
//$(`div`).apend(`<strong>another<strong>`);
//$(`div`).remove();

$(`button`).click (() => {
    $(`.first`).toggleClass(`hidden`);
})

// from 1st part to the 3rd
console.log("JavaScript is working");

let colors = ["orange", "blue", "red", "white", "black"]
let post = {
    tile: "my Post",
    description: "My Fisrt post",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
}

let posts = [{
title: "First Post",
likeCount: 12,
}, {
    title: "Second Post",
    likeCount: 222
}
]

console.log(colors)
console.log(post)

let age = 18;

if (age>=18) {console.log ("YOU ARE AN ADULT!");
} else
{console.log ("your are a kid !")
}

for (let i = 0; i < 10; i++) {
    console.log (i);
    }
    
    console.log (colors);

let greeter = name => {
        console.log (`Hello, ${name}`);
    }
        
   greeter("Adam");
   greeter("Eva");
   greeter("Josef");
   greeter("Maria");
     

    colors.forEach(color => {
        console.log(color)
    });

    console.log("This is the end of our code");