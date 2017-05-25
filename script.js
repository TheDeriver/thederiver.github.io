function openTab(event, tabName) {
    var i, tabPage, mainTab;
    tabPage = document.getElementsByClassName("tabPage");
    for (i = 0; i < tabPage.length; i++) {
        tabPage[i].style.display = "none";
        tabPage[i].style.color = "black";
    }
    mainTab = document.getElementsByClassName("mainTab");
    for (i = 0; i < mainTab.length; i++) {
    	mainTab[i].style.cursor = "pointer";
        mainTab[i].className = mainTab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).style.transition = "3s";
    document.getElementById(tabName).style.color = "white";
    event.currentTarget.className += " active";
 	event.currentTarget.style.cursor = "default";
}