import "./scroll-timeline.js";
const progress = document.querySelector(".progress");
const scrollBox = document.querySelector(".scroll-box");
const targetImages = document.querySelectorAll(".target-image");
progress.animate(
  [
    {
      transform: "scaleX(0)",
    },
    {
      transform: "scaleX(1)",
    },
  ],
  {
    timeline: new ScrollTimeline({
      // scroll 타임 라인의 기준이 되는 요소를 넣기 >> body
      scrollOffsets: [
        {
          // target: scrollBox,
          target: document.body,
          edge: "start",
          // threshold : 1이면 보통 처음부터 적용됨..
          // 적용을 어디서부터 헐 건지 하는 거..
          // threshold를 0.5로 하게 될 경우 스크롤이 body의 중간에 갔을 때 애니메이션이 실행됨
          threshold: 1,
        },
        {
          // target: scrollBox,
          target: document.body,
          edge: "end",
          threshold: 1,
        },
      ],
    }),
  }
);

targetImages.forEach((image) => {
  // 각 이미지의 위치 구하기
  const imageTop = image.offsetTop;
  const imageHeight = image.offsetHeight;
  const offset1 = imageTop + imageHeight - window.innerHeight;
  const offset2 = imageTop - window.innerHeight * 0.2;
  image.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      timeline: new ScrollTimeline({
        scrollOffsets: [
          new CSSUnitValue(offset1, "px"),
          new CSSUnitValue(offset2, "px"),
        ],
      }),
    }
  );
});
