class Game
{
    constructor()
    {
        
    }
    getState()
    {
         var gameRef=db.ref("gameState");
         gameRef.on("value",function(data){
            gameState = data.val();
         })
        
    }
    update(state)
    {
        db.ref("gameState").set(state)
    }
    start()
    {
        if(gameState===0)
        {
            player=new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        cars=[car1,car2,car3,car4]
    }
    play()
    {
        
        form.hide();
        
        Player.getPlayersInfo()
        if(allPlayers !== undefined )
        {
            var y = 200;
            var x = -100;
            var index = 0; 
          
            for(var p in allPlayers){
                
                x+=200; 
                index+=1;
                y=allPlayers[p].distance * (-1)+displayHeight
                cars[index-1].x=x;
                cars[index-1].y=y;

               
                if(index===player.index)
                {
                    cars[index-1].shapeColor="Red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y
                }
               
            }
        }
        if(keyDown(UP_ARROW)&&player.index!==null)
        {
            player.distance+=10;
            player.update()
        }
        drawSprites()

    }
}