const form=document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');

    const message=document.querySelector(".user_message")

     result.style.color="red";

    if(height===''||height < 0|| isNaN(height)){
        result.innerHTML=`Enter valid Height ${height}`
    }else if(weight===''||weight < 0|| isNaN(weight)){
        result.innerHTML=`Enter valid Weight ${weight}`
    }else{
        const IBM=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${IBM}</span>`
    }

    // if(IBM < 18.6){
    //   message.innerHTML=`Body is under weight `
    // }
    // if(IBM >18.6 && IBM <24.9){
    //     message.innerHTML=`Body is Normal range`
    // }
    // if(IBM > 24.9){
    //     message.innerHTML=`Body is over weight`
    // }
})
