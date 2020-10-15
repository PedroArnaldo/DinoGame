const dino = document.querySelector('.dino');
let isJumping = false;
function handleKeyUp(event)
{
    if(event.keyCode === 32)
    {
        if(!isJumping)
        {
            Jump();
        }
        console.log("Pressionou espaço!");
        
    }
}

function Jump()
{
    let position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150)
        {
            clearInterval(upInterval);
            
            //Descendo
            let downInterval = setInterval(() =>{
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }
                else{
                    position -=20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }
        else
        {
            //Subindo
            position += 20;

             dino.style.bottom = position + 'px';

        }

        

    }, 20); //vai ser executado a cada 20 ms
}

document.addEventListener('keyup', handleKeyUp);