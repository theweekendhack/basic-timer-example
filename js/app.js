function main()
{
        
        const div = document.querySelector("div");
        let time = 10;

         const intervalObj = setInterval(function(){

           
            time--;
            if(time == 0)
            {
                clearInterval(intervalObj); //destory the current setInterval 
            }


             div.innerText = time;


        },1000)



}


main();