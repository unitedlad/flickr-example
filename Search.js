$(document).ready(function () { 
			$("#actualSearchPanel").hide(); 

            $("#searchPanel").click(function () { 
                $("#actualSearchPanel").slideToggle("slow"); 
            }); 

            $('#actionSearch').click(function(){
			
				var v = $('#searchCriteria').val().toLowerCase(); 
                if (v == "") { 
					$('div:hidden').each(function() {
						$(this).show();
					});

                    return; 
                }

				var childDivs = document.getElementById('container').getElementsByTagName('div');

				$('#container').find('div').each(function(){
					var loopInnerDiv = $(this);
					
					if (loopInnerDiv.attr("id").toLowerCase().indexOf(v) == -1) { 
                        loopInnerDiv.hide(); 
                    } else { 
                        loopInnerDiv.show();
                    }
				});		
			});
        });