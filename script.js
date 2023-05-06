// let data = dat();

// function dat(){
//  he();
// }

// function he(){
//     setTimeout(function timer() {
//         return ('App is under construction..');    
//       },1000);
// }
// let header = document.getElementById('count')
// header.innerHTML=data;


let count = document.querySelector('#count');
let initial = 10;

setTimeout(()=>{
    count.innerHTML=initial;
    initial=initial-1;
    setTimeout(()=>{
        count.innerHTML=initial;
        initial=initial-1;
        setTimeout(()=>{
            count.innerHTML=initial;
            initial=initial-1;
            setTimeout(()=>{
                count.innerHTML=initial;
                initial=initial-1;
                setTimeout(()=>{
                    count.innerHTML=initial;
                    initial=initial-1;
                    setTimeout(()=>{
                        count.innerHTML=initial;
                        initial=initial-1;
                        setTimeout(()=>{
                            count.innerHTML=initial;
                            initial=initial-1;
                            setTimeout(()=>{
                                count.innerHTML=initial;
                                initial=initial-1;
                                setTimeout(()=>{
                                    count.innerHTML=initial;
                                    initial=initial-1;
                                    setTimeout(()=>{
                                        count.innerHTML=initial;
                                        initial=initial-1;
                                        setTimeout(()=>{
                                            count.innerHTML="Happy Independance Day";
                                            initial=initial-1;
                                            count.style.color="blue";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)