$(document).ready(function(){
    var servicename = ['ser1', 'ser2', 'ser3', 'ser1', 'ser2', 'ser3'];
    var servicedisc = {'ser1' : 'disc1', 'ser2' : 'disc2', 'ser3' : 'disc3'};

    var test = col = panel = panelheading = header= endheading = cpanel = "";

    $('.servicediv').append('<div class="row">');
    for(ser in servicename){
	    
	    col = '<div class="col-md-2">',
	    panel = '<div class="panel panel-default">',
	    panelheading = '<div class="panel-heading">',
	    header = '<h2 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#'+servicename[ser]+ '">' + servicename[ser] + '</a></h2></div>',
	    cpanel = '<div id="' + servicename[ser] + '" class="panle-collapse collapse">',
	    cbody = '<div class="panel-body"><a href="' + servicename[ser] + '.html"><img class="img-responsive img-portfolio img-hover" src="../images/' + servicename[ser] + '.jpg" alt=""></a>',
	    disc = '<p>'+ servicedisc[servicename[ser]] + '</p> <a href="#" class="btn btn-default">Learn More</a>',
	    closetags = '</div></div></div></div>';
	    servicepanel = col+panel+panelheading+header+cpanel+cbody+disc+closetags;
	    $('.servicediv').append(servicepanel);
	}


});