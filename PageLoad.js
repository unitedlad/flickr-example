var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?";
		$.getJSON( flickerAPI )
		.done(function( data ) {
		
		var outerDiv = $("#container");
			
			var index = 1;
			$.each( data.items, function( i, item ) {
				
				var innerDiv = ($('<div/>'));
				innerDiv.attr('class', 'innerDiv');
				var innerDivId = item.author.replace("nobody@flickr.com ", "");
				innerDiv.attr('id', innerDivId);
				innerDiv.appendTo(outerDiv);
				
				var img = $('<img/>'); 
				img.attr('src', item.media.m); 
				img.appendTo(innerDiv); 

				innerDiv.append($('<br/>')); 
				innerDiv.append($('<br/>')); 

				var photoLink = $("<a/>"); 
				photoLink.attr('href', item.media.m).append('<span>' + item.title + '</span>');;
				photoLink.attr('target', '_blank');
				photoLink.appendTo(innerDiv); 

				innerDiv.append($('<span>  by  </span>')); 

				var authorLink = $('<a/>'); 
				authorLink.attr('href', item.link).append('<span>' + innerDivId + '</span>');
				authorLink.attr('target', '_blank');
				authorLink.appendTo(innerDiv); 

				innerDiv.append($('<br/>')); 
				innerDiv.append($('<br/>')); 

				var description = $('<span>Description -  ' + item.description + '</span>');
				description.appendTo(innerDiv); 
				
				innerDiv.append($('<br/>')); 
				innerDiv.append($('<br/>')); 

				var tags = $('<span>Tags - ' + item.tags + '</span>');
				tags.appendTo(innerDiv);
				
				index++;
			});
		});