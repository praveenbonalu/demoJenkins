({
    scroll : function(component, event, helper) {
        
        var d = document.getElementById("scrollabletag");
        var offset = d.scrollTop ;//+ window.innerHeight;
        var height = d.offsetHeight;
        
        console.log('offset = ' + offset);
        console.log('height = ' + height);
        
        if (height === 350) {
            console.log('At the bottom');
        }
    }
})