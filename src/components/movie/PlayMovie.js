import YouTube from "react-youtube";

const PlayMovie = () => {
  return (
    <div>
      <YouTube
        videoId="qT_fjEgPsaA"
        opts={{
          width: "1000px",
          height: "460px",
          playerVars: {
            autoplay: 0, //자동재생 O
            rel: 0,
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </div>
  );
};

export default PlayMovie;
