function onshareButtonClick(){
    let menu = document.getElementById("menuOverlay");
    
    if(!isElementHidden(menu)){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
    console.log(isElementHidden(menu));
}

function onLoad(){
    let element = document.getElementById("shareBtn");

    element.addEventListener("click", onshareButtonClick, false);
}

function isElementHidden(element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
}