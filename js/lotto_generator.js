
		var ballCnt	= 6 , //로또 번호 갯수
		ratationCnt	//1회 클릭 시 로또 그룹 반복 횟수 
		;  


var lotto = {
		parent 	: new Object(), //객체 생성
		create 	: function(){ //로또 번호 생성 함수

			var ballArray = new Array(),
					bg 				= '#eee'; //회색 
			
			//숫자 램덤하게 뽑기
			for(var i = 0; i < ballCnt; i++){

				//램덤하게 번호 생성
				ballArray[i]  = Math.floor(Math.random() * 100)+1;

				//45보다 높은 값 제거
				if(ballArray[i] > 45) i--; 

				//중복 값 제거
				for(var j = 0; j < i ; j++){ 
					if( ballArray[i] == ballArray[j] ){
						i--;
						break;
					}
				}

			}

			//숫자 정렬기
			ballArray.sort(sortNumber);

			function sortNumber (a,b){
				return a-b;
			}

			//
			for(var i = 0; i < ballCnt; i++){
				//배경색 지정
				if(ballArray[i]> 1 && ballArray[i]<= 10 ){
					bg = 'salmon'
				}else if (ballArray[i]> 10 && ballArray[i]<= 20 ){
					bg = 'green'
				}else if (ballArray[i]> 20 && ballArray[i]<= 30 ){
					bg = 'yellow'
				}else {
					bg = 'gray'
				}
				//로또 번호 삽입 
				$('.ball_list li:last-child').append('<div style="background-color:'+bg+';">'+ballArray[i]+'</div>'); 
			}
		},
		rotation : function(cnt){
			ratationCnt = cnt ;
			for(var i = 0; i < ratationCnt ; i++){
				$('.ball_list').append('<li class="once"></li>');
				lotto.create();

			}
		},
		init : function(){ //첫 세팅

			$('.ball_list li').remove();

		},
	}


$(document).on('click','.btn_create', function(){
	lotto.rotation(5);

	return false;
}); 

$(document).on('click','.btn_reset', function(){
	lotto.init();

	return false;
}); //giveUp