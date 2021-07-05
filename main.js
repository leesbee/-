// 동물 DB
const petData = [
    {
        imgUrl: 'images/dog01.jpg', // 이미지 주소
        name: "미미",    // 동물 이름
        type: "dog"
    },
    {
        imgUrl: 'images/dog02.jpg',
        name: '멍뭉이',    
        type: "dog"
    },
    {
        imgUrl: 'images/dog03.jpg',
        name: '벤지',    
        type: "dog"
    },
    {
        imgUrl: 'images/dog04.jpg',
        name: '낑깡',    
        type: "dog"
    },
    {
        imgUrl: 'images/dog05.jpg',
        name: '딸기',
        type: "dog"    
    },
    {
        imgUrl: 'images/dog06.jpg',
        name: '또치',
        type: "dog"    
    },
    
      { 
        imgUrl: 'images/cat01.jpg',
        name: "야옹이1",
        type: "cat"
      },
      { 
        imgUrl: 'images/cat02.jpg',
        name: "야옹이2",
        type: "cat"
      },
      { 
        imgUrl: 'images/cat03.jpg',
        name: "야옹이3",
        type: "cat"
      },
      { 
        imgUrl: 'images/cat04.jpg',
        name: "야옹이4",
        type: "cat"
      },
      { 
        imgUrl: 'images/cat05.jpg',
        name: "야옹이5",
        type: "cat"
      },
      { 
        imgUrl: 'images/cat06.jpg',
        name: "야옹이6",
        type: "cat"
      },
      { 
        imgUrl: 'images/bird01.jpg',
        name: "새1",
        type: "bird"
      },
      { 
        imgUrl: 'images/bird02.jpg',
        name: "새2",
        type: "bird"
      },
      { 
        imgUrl: 'images/bird03.jpg',
        name: "새3",
        type: "bird"
      },
      { 
        imgUrl: 'images/bird04.jpg',
        name: "새4",
        type: "bird"
      },
      { 
        imgUrl: 'images/bird05.jpg',
        name: "새5",
        type: "bird"
      },
      { 
        imgUrl: 'images/bird06.jpg',
        name: "새6",
        type: "bird"
      },
];

// $(function(){
//     for(var i =  0; i < petData.length; i++){
//         console.log(petData[i].name);
//     }

$(function(){
    var html = ''; //html변수
    // 동물데이터 불러오기
    for(var i = 0; i < petData.length; i++) {
        // console.log(petData[i].name)
        if(petData[i].type =='bird'){
            // += 계속 목록을 추가한다는의미
        html += `  
        <li>
         <a href="#">
            <img 
               src="${petData[i].imgUrl}" 
               alt="${petData[i].name}"
            >
            <div class="caption">
                <h4>${petData[i].name}</h4>    
            </div>                    
         </a>
        </li>`
        }        
    }
    //html 목록 출력
    $('.pet-list').html(html)
})