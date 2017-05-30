function openTab(event, tabName) {
    var i, tabPage, mainTab;
    tabPage = document.getElementsByClassName("tabPage");
    for (i = 0; i < tabPage.length; i++) {
        tabPage[i].style.display = "none";
       tabPage[i].style.opacity = 0;
    }
    mainTab = document.getElementsByClassName("mainTab");
    for (i = 0; i < mainTab.length; i++) {
    	mainTab[i].style.cursor = "pointer";
        mainTab[i].className = mainTab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).style.opacity = 1;
    event.currentTarget.className += " active";
 	event.currentTarget.style.cursor = "default";

}