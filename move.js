function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;   // }
        let x = left;           // | <- Tracks character's current direction.  
        let y = bottom;         // }
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        // Calls function every ms, moving in the direction specified by the variable.  
        setInterval(moveCharacter, 1)
        // Listens for the user's arrow key inputs and assigns an appropriate direction.  
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })
        // Assigns null to the direction whenever the player discontinues their inputs.  
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }
    

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}