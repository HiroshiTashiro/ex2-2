var Template = function(input) {
    // この関数を実装してください
    this.source = input.source;
    
};

Template.prototype = {
    render: function(variables) {
        // この関数を実装してください
        var content =this.source;
        function htmlEscape(s){
		s=s.replace(/&/g,'&amp;');
		s=s.replace(/>/g,'&gt;');
		s=s.replace(/</g,'&lt;');
		s=s.replace(/\"/,'&quot;');
		s=s.replace(/\s/,'&nbsp;');
		return s;
	}
	var originalcontent=content;
	var n=0;
	for(var data in variables){
		n++;
	}
	for(var i=0;i<n-1;i++){
		content+=originalcontent;
	}
	colors = new Array("#b0c4de","#000000","#c0c0c0","#008000","#ff0000","#ff1493","#ffff00","#00fa9a");

        for(var data in variables){
        	
        	for(var key in variables[data]){
	        	var reg = new RegExp("{%\\s"+key+"\\s%}");
	        	var newstr="";
	        	var str=variables[data][key];
	        	
			if(str!=""){
				for(n=0;n<str.length;n++){
					var randnum = Math.floor( Math.random() * colors.length );
		        		newstr=newstr+"<font color='"+colors[randnum]+"'>"+str.charAt(n)+"</font>";
				
				}
				variables[data][key]=newstr;
			}
			
			content=content.replace(reg,variables[data][key]);
        	}
        }
        
        return content;
    }
};

