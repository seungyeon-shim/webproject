	function hover_box(obj,obj2){
		var obj = obj
	
		function getDegree(obj_this,e){
			var obj_this = obj_this
			var e = e
			var mouseX = e.pageX
			var mouseY = e.pageY
			var centerX=obj_this.offset().left+obj_this.width()*0.5
			var centerY=obj_this.offset().top+obj_this.height()*0.5
			var rad=Math.atan2(mouseY-centerY , mouseX-centerX)
			var deg=rad*180/Math.PI
			var deg_lt=(Math.atan2(obj_this.offset().top-centerY,obj_this.offset().left - centerX) )* 180/Math.PI
			var deg_rt=(Math.atan2(obj_this.offset().top-centerY,obj_this.offset().left+obj_this.width()-centerX))*180/Math.PI
			var deg_rb=(Math.atan2(obj_this.offset().top+obj_this.height()-centerY,obj_this.offset().left+obj_this.width()-centerX))*180/Math.PI
			var deg_lb=(Math.atan2(obj_this.offset().top+obj_this.height()-centerY,obj_this.offset().left-centerX))*180/Math.PI		
			var degObj = new Object()
			degObj.deg = deg
			degObj.deg_lt =deg_lt
			degObj.deg_rt=deg_rt
			degObj.deg_rb=deg_rb
			degObj.deg_lb=deg_lb
			return degObj;
		}
		
		$(obj).mouseenter(function(e){
			var obj_this = $(this)
			var e = e
			var degObj =  getDegree(obj_this,e)
			var deg = degObj.deg
			var deg_lt=degObj.deg_lt
			var deg_rt=degObj.deg_rt 
			var deg_rb=degObj.deg_rb
			var deg_lb=degObj.deg_lb	
			if(deg >= deg_lt && deg < deg_rt){//상단
				$(this).children(obj2).css({'left' : '0', 'top' : '-100%' })
			}else if(deg>=deg_rt && deg < deg_rb){//오른쪽
				$(this).children(obj2).css({'left' : '100%', 'top' : '0%' })
			}else if(deg>=deg_rb && deg <deg_lb){//하단
				$(this).children(obj2).css({'left' : '0', 'top' : '100%' })
			}else{//왼쪽
				$(this).children(obj2).css({'left' : '-100%', 'top' : '0' })
			}
			$(this).children(obj2).stop().animate({'left' : '0', 'top' : '0' })
		})//mouseenter
		
		$(obj).mouseleave(function(e){
			var obj_this = $(this)
			var e = e
			var degObj = getDegree(obj_this,e)
			var deg = degObj.deg
			var deg_lt=degObj.deg_lt
			var deg_rt=degObj.deg_rt 
			var deg_rb=degObj.deg_rb
			var deg_lb=degObj.deg_lb
			if(deg >= deg_lt && deg < deg_rt){//상단
				$(this).children(obj2).stop().animate({'left' : '0', 'top' : '-100%' })
			}else if(deg>=deg_rt && deg < deg_rb){//오른쪽
				$(this).children(obj2).stop().animate({'left' : '100%', 'top' : '0' })
			}else if(deg>=deg_rb && deg <deg_lb){//하단
				$(this).children(obj2).stop().animate({'left' : '0', 'top' : '100%' })
			}else{//왼쪽
				$(this).children(obj2).stop().animate({'left' : '-100%', 'top' : '0' })
			}
		})//mouseleave
	}//hoverbox