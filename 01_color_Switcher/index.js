const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function(argument){
    argument.addEventListener('click',function(e){
        if(e.target.id==='grey')
        body.style.backgroundColor='grey'
        if(e.target.id==='white')
        body.style.backgroundColor=e.target.id
        if(e.target.id==='blue')
        body.style.backgroundColor=e.target.id
        if(e.target.id==='yellow')
        body.style.backgroundColor=e.target.id
    })
})

/-------------Without Loop ---------------------!

// const button1=document.getElementById('grey')
// button1.addEventListener("click",function(e)
// {body.style.backgroundColor="grey"})

// const button2=document.getElementById('white')
// button2.addEventListener("click",function(e)
// {body.style.backgroundColor="white"})

// const button3=document.getElementById('blue')
// button3.addEventListener("click",function(e)
// {body.style.backgroundColor="blue"})

// const button4=document.getElementById('yellow')
// button4.addEventListener("click",function(e)
// {body.style.backgroundColor="yellow"})
