import YouTube from "react-youtube";
//"qT_fjEgPsaA"
const PlayMovie = (props) => {
  return (
    <div>
      <YouTube
        videoId={props.videoId}
        opts={{
          width: "100%",
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
