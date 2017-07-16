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
    document.getElementById(tabName).style.opacity = 0.999;
    event.currentTarget.className += " active";
 	event.currentTarget.style.cursor = "default";

}


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-102650082-1', 'auto');
  ga('send', 'pageview');

