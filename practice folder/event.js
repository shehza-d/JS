// // This is for consoling the Properties of Event
// //     <!-- <form onsubmit="my_function(event); return false">
// //         <button>sjsfj</button>
// //     </form>
//         let my_function = (e) => {
//         console.log(e);
//         }

// //     <form onsubmit="function(event); return false">
// //         <input type="text" id="input">
// //     </form>
//         let myFunction = (e)  => {
//         e.preventDefault();
//        let input = document.querySelector('#input');
//        console.log(input);
//         }   


//3-aug-2022
document.addEventListener("mousedown", (event)=>{
    document.body.style.backgroundColor = "red";
});
document.addEventListener("mouseup", (event)=>{
    document.body.style.backgroundColor = "white";
});

document.addEventListener('mousemove', (event)=>{
    console.log(event);
})

/*
chapter 45 Event
jS support functional programming and oop
Programming Paradigms [functional programming, object-oriented programming, event driven programming]
har event ka koi quencequence hota hy
pubsub subscribe
try event driven in form valation after entring value(onblur)

download button 
ye dot na choray
4 pen



*/