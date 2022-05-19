var d = document.querySelector("div");

var q = [
  "Q. 세계에서 1인당 플라스틱 소비량이 가장 많은 나라는 한국이다.",
  "Q. 지구 환경오염 문제의 심각성을 알리기 위해서 자연보호자들이 제정한 지구의 날은 몇 월 며칠 인가요?",
  "Q. 세계 물의 날은 3월22일이다.",
  "Q. 유통기한이 지난 의약품은 일반 쓰레기에 버려도 된다.",
  "Q. 쓰레기 섬(The Trash Isles)은 쓰레기로 이루어진 정식 국가이다?",
  "Q. 디지털 기기 사용만으로 탄소가 발생한다.",
  "Q. 음식 포장으로 발생하는 불필요한 쓰레기를 줄이기 위해 다회용기 등에 음식을 담아 실천하는 이 운동은?(OOO 챌린지)",
  "Q. 젤아이스팩은 내용물을 흘려버리고 포장지만 버려야 한다.",
  "Q. 플로깅은 스웨덴어 '플로카 업(Plocka upp; 줍다)'과 영어 '조깅(Jogging; 조깅)'의 합성어이다.",
  "Q.숲은 소음을 줄여주는 역할을 한다",
  "Q. 카페 등에서 쉽게 볼 수 있는 플라스틱 빨대는 일반 쓰레기일까?",
  "환경운동의 3R 중 아닌것은? (1. reuse, 2. recycle, 3. refer, 4. reform)",
  "Q. 플라스틱 텀블러가 환경보호 효과를 내려면 몇 회 이상을 써야할까요? 1) 5회 2)17회 3) 34회 4)50회",
  "Q. 재활용종이(폐휴지)를 재활용하면 나무와 물을 절약 할 수 있다?",
];

var b = [
  "A. O",
  "A. 4월 22일",
  "A. O",
  "A. X (의약품을 일반쓰레기로 처리할 경우 약물 성분이 녹아 토양 및 수질오염의 원인이 된다)",
  "A. O",
  "A. O",
  "A. 용기내 챌린지",
  "A. X(뜯지 않은 상태로 종량제봉투에 넣어 버리거나, 가까운 주민센터에 위치한 아이스팩 수거함을 이용한다)",
  "A. O",
  "A. O",
  "A. O",
  "A. (3) refer",
  "A. 2) 17회 텀블러 생산과 폐기 과정에서 종이컵이나 플라스틱 컵보다 더 많은 온실가스가 발생된다.\n 스테인리스텀블러는 무려 1000회 이상 사용해야 환경보호 효과를 거둘 수 있습니다.",
  "A. O-재활용 종이(폐휴지)없이 새로운 종이를 만들려면 종이 1톤을 만드는 데에 나무 24그루, 물 86톤을 사용해야 하지만, 재활용된 폐휴지와 함께 종이를 만들 때는 나무 14그루, 물 69톤을 사용하기 때문에 많은 양의 나무와 물을 절약할 수 있어요.",
];

var c = [
  document.createElement("img"),
  document.createElement("img"),
  document.createElement("img"),
];

var e = document.createElement("p");
e.id = "discription";

var f = ["참참참", "눈싸움", "묵찌빠"];

c[0].className = "special";
c[1].className = "special";
c[2].className = "special";
// 참참참
c[0].src =
  "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/ed4f60c588838ef6da378b9a22d8c998";

// 눈싸움
c[1].src = "https://i.ibb.co/YBV5tqj/Screen-Shot-2022-05-14-at-9-06-20-PM.png";

// 묵찌빠
c[2].src =
  "https://www.seekpng.com/png/detail/111-1113471_vector-scissors-rock-paper-paper-rock-scissors-png.png";

var length = q.length;

function a() {
  var index = Math.floor(Math.random() * (length + 6));
  if (index >= length && length != 0) {
    index = Math.floor(Math.random() * 3);
    // index = 2;
    e.innerText = f[index];
    d.appendChild(e);
    d.appendChild(c[index]);

    setTimeout(function () {
      d.removeChild(c[index]);
      d.removeChild(e);
    }, 5000);
  } else {
    if (q[index] == null) {
      alert("남은 문제가 없습니다.");
      return;
    }
    var quiz = document.createElement("div");
    quiz.innerText = q[index];
    var temp = b[index];
    quiz.id = "quiz";

    var answer = document.createElement("button");
    var text = document.createTextNode("정답 확인");

    answer.appendChild(text);
    answer.id = "answer";
    var flag = true;

    answer.onclick = function () {
      if (flag) {
        quiz.innerText = temp;
        answer.innerText = "닫기";
      } else {
        d.removeChild(quiz);
        d.removeChild(answer);
      }
      flag = !flag;
    };

    d.appendChild(quiz);
    d.appendChild(answer);

    for (var i = index; i < length; i++) {
      q[i] = q[i + 1];
    }
    for (var i = index; i < length; i++) {
      b[i] = b[i + 1];
    }
    length--;
  }
}

var imgCase = document.createElement("div");
imgCase.id = "imgCase";

var img1 = document.createElement("img");
img1.className = "button";
img1.src = "https://i.ibb.co/zJDkY88/Kakao-Talk-Photo-2022-05-13-11-27-48.jpg";
img1.onclick = a;

var img2 = document.createElement("img");
img2.className = "button";
img2.id = "rightButton";
img2.src = "https://i.ibb.co/19Jh2r0/yellow-Earth-Image.png";
img2.onclick = a;
imgCase.appendChild(img1);
imgCase.appendChild(img2);
d.appendChild(imgCase);
