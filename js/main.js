function loadUser() {

	// main content
	renderCategory('#target-fun','FUN 趣味','爆發心中的小宇宙，校園就是我的遊樂場！');
	renderCategory('#target-campus','CAMPUS 校園','在清華最後的日子，怎能不做點新鮮的事！');
	renderCategory('#target-issue','ISSUE 議題','回顧這幾年直到如今，原來發生過這麼多事情！');

	// Missions Modal
	var template = $('#template').html();
	Mustache.parse(template);   // optional, speeds up future uses
	for(var index = 1 ; index<= missions_info.length ; index++){
		var rendered = Mustache.render(template, missions_info[index-1] );
		$('#target').append(rendered);
	}

	
	

}
function renderAll(){
	var template = $('#template-all').html();
	Mustache.parse(template);
	for(var index = 1 ; index<= missions_info.length ; index++){
		var rendered = Mustache.render(template, missions_info[index-1] );
		$('#target-list-all').append(rendered);
	}

}


function renderCategory(target_id,category, description){
	var template_fun = $('#template-category').html();
	Mustache.parse(template_fun);

	var missions_catogory = missions_info.filter( function(element){
		return element.category == category;
	});

	var rendered = Mustache.render(template_fun, {
		category : category,
		description : description
	});
	$(target_id).html(rendered);


	var template_content = $('#template-content').html();
	Mustache.parse(template_content);
	var buffer = [];
	for(var index = 1 ; index <= missions_catogory.length ; index++){
		
		buffer.push(missions_catogory[index-1]);
		if(buffer.length>=4){
			
			var wrapper = $('<div class= "row">');
			for(var j=0 ; j < buffer.length ; j++ ){
				var num = buffer[j].id.substring(6, 9);
				buffer[j].num = num;
				wrapper.append(Mustache.render(template_content, buffer[j]));
			}
			
			$(target_id).append(wrapper);
			buffer = [];
		}


	}

}







