import { useRef, useState, useEffect } from "react";
import napster from "../services/napster";
import "../style/style";
import { HiOutlinePlay } from "react-icons/hi";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { AiOutlinePause } from "react-icons/ai";
import { Container } from "../style/style";

function Player({ song }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const music = useRef();
  const key = "ZTVhYTU3MWEtZjRhNy00MmRmLWJiZDAtNjQwNTAwN2E0ODhi";

  const [currentTrack, setCurrentTrack] = useState({});

  useEffect(() => {
    getMusics();
  }, []);

  useEffect(() => {
    if (tracks[currentIndex]) setCurrentTrack(tracks[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    console.log(tracks);
  }, [tracks]);

  const getMusics = async () => {
    let musics = await napster.get(`top?apikey=${key}`).then((r) => r);
    setTracks(musics.data.tracks);
  };

  const loadSong = () => {
    music.current.src = tracks[currentIndex]?.previewURL;
    play();
  };

  const play = () => {
    music.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    music.current.pause();
    setIsPlaying(false);
  };

  const next = () => {
    setCurrentIndex(currentIndex == 18 ? 0 : currentIndex + 1);
    loadSong();
  };

  const prev = () => {
    setCurrentIndex(currentIndex == 0 ? 18 : currentIndex - 1);
    loadSong();
  };

  return (
    <Container>
      <div className="box">
        <div className="album">
          <h2>capa do album</h2>
          <h3>{currentTrack ? currentTrack.artistName : ""}</h3>
          <div className="capa"></div>
          <div className="music">
            {isPlaying ? <h2>{tracks[currentIndex].name}</h2> : <h2></h2>}
          </div>
        </div>

        <audio
          ref={music}
          src={
            song?.url ||
            "https://listen.hs.llnwd.net/g2/prvw/4/2/4/9/8/911189424.mp3"
          }
        ></audio>

        <div className="buttons">
          <button className="button-element" onClick={prev}>
            <GrCaretPrevious />
          </button>
          <button className="button-element" onClick={isPlaying ? pause : play}>
            {isPlaying ? <AiOutlinePause /> : <HiOutlinePlay />}
          </button>
          <button className="button-element" onClick={next}>
            <GrCaretNext />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Player;
