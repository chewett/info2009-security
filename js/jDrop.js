$(function() {

		//onclick, each answer is looped througyh in order. if it doesn't loop through in order form 0 - numquestions-1 then it is wrong
		//the checks are made using the index.. the index should match the answer id
		//text can be written down/higligting used
		$("#checkButton").click(function(){
			var resultSet = "";
			var results = 0;
			var totalQuestions =0;

			$('.answer').each(function(index){
				if(index == $(this).attr('id')){
					//resultSet += '<div> Statement ' + index + ' is correct</div>';
					results++;
					totalQuestions++;
					$('.answer#' + index).css('color', 'green'); 
					$('.question').eq(index).css('color', 'green'); 

				}else{
					//resultSet += '<div> Statement ' + index + ' is false</div>';
					totalQuestions++;
					$('.answer#' + index).css('color', 'red'); 
					$('.question').eq(index).css('color', 'red'); 
				}
			});
			resultSet += '<div>You managed to get ' + results + '/' + totalQuestions + ' statements correct.</div>';
			if(results == totalQuestions){
				resultSet += '<div>Well done!</div>';
			}else{
				resultSet += '<div>Try again and see if you can get them all right!</div>';
			}
				
			$('div.resultKeeper').html(resultSet).show();


		});
  	})