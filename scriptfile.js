function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'flex';
    
}

function showZone(zone) {
    console.log ("Zone clicked: ", zone);
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'none';
    
   

    document.querySelectorAll('.zone-screen').forEach(screen =>{
        screen.style.display = 'none';
    });

    let targetZone = document.getElementById(zone + 'Zone');
    console.log("Target Zone Element;" , targetZone);

    if (targetZone){
        targetZone.style.display = 'flex'
    } else {
        console.error("Element not found:" , zone + 'Zone');
    }

}

function showFact(fact){
    document.getElementById('fact-text').innerHTML = fact;
}

function nextZone(){
    window.location.href = "MainFinal.html";
}

function goHome(){
    document.getElementById('gameScreen').style.display = 'none';
    document.querySelectorAll('.zone-screen').forEach(screen =>{
        screen.style.display = 'none' ;
    });
    
}