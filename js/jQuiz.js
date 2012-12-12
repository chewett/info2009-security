$(function(){

    var jQuiz = {
        answers: [],
      questionLength:0,
	
        checkAnswers: function() {
            var arr = this.answers;
            var ans = this.userAnswers;
            var resultArr = []
            for (var p in ans) {
                var x = parseInt(p) + 1;
              
                var flag = false;
                if (ans[p] == 'q' + x + '-' + arr[x]) {
                    flag = true;
                }
                else {
                    flag = false;
                }
                resultArr.push(flag);
            }
            return resultArr;
        },
        init: function(){
            $('.btnNext').click(function(){
                if ($('input[type=radio]:checked:visible').length == 0) {
                            
                    return false;
                }
                $(this).parents('.questionContainer').fadeOut(500, function(){
                    $(this).next().fadeIn(500);
                });
                var el = $('#progress');
		var totalWidth = $('#progressparent').width();
		var numQuestions = $('div#numQuestions').text();
		var existingWidth = 100/(totalWidth/el.width());
                el.width(existingWidth + (100/numQuestions) + '%');
            });
            $('.btnPrev').click(function(){
                $(this).parents('.questionContainer').fadeOut(500, function(){
                    $(this).prev().fadeIn(500)
                });
		var numQuestions = $('div#numQuestions').text();
                var el = $('#progress');
		var totalWidth = $('#progressparent').width();	
		var existingWidth = 100/(totalWidth/el.width());
                el.width(existingWidth - (100/numQuestions) + '%');
            })
            $('.btnShowResult').click(function(){
		//add user answers to userAnswers array
                var arr = $('input[type=radio]:checked');
                var ans = jQuiz.userAnswers = []; 
                for (var i = 0, ii = arr.length; i < ii; i++) {
                    ans.push(arr[i].getAttribute('id'))
                }


		//find number of questions
		var numQuestions = $('div#numQuestions').text();
		jQuiz.questionLength = numQuestions;
		//add the correct answers to the answers array
		for(var i=0; i<numQuestions; i++){
			var ans = $('div#' + (i+1)).text();
			jQuiz.answers[i+1] = ans;
		}
            })
            $('.btnShowResult').click(function(){
		var el = $('#progress'); 
              el.width(100 + '%');
                $('#progressKeeper').hide();
                var results = jQuiz.checkAnswers();
                var resultSet = '';
                var trueCount = 0;
		var numQuestions = $('div#numQuestions').text();
                for (var i = 0, ii = results.length; i < ii; i++){
                    if (results[i] == true) trueCount++;
                    resultSet += '<div> Question ' + (i + 1) + ' is ' + results[i] + '</div>'
                }
                resultSet += '<div class="totalScore"><b>Your total score is ' + trueCount  + ' / ' + numQuestions + '</b><br/></div>'
                $('#resultKeeper').html(resultSet).show();
            })
        }
    };

    jQuiz.init();

})