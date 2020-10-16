const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
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

function Cactus() {

    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);


}

Cactus();
document.addEventListener('keyup', handleKeyUp);