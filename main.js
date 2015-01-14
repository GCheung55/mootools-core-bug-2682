require.config({
  paths:{
    mootools: './mootools.core.1.5.yc',
  },
  shim: {
    mootools: {
      exports: 'MooTools'
    }
  }
});
require(['mootools'],function(Moo){
  console.log('MooTools Version: ' + Moo.version)
  console.log('Starting script');
  window.addEvent('domready',function(){
    var currentdate = new Date(); 
    var datetime  = currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
    $(document.body).set('html', datetime + ', Ladies and gentlemen: the DOM is ready...');
    console.log('I\'m ready to rock!');
  });
});
