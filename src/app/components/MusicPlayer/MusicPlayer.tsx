import style from "./musicplayer.module.scss";
import { songs as songData } from "./assets/songs/songs";
import { useEffect, useRef, useState } from "react";
import { Slider } from "@mui/material";
import { icon__close, icon__forward, icon__play } from "./assets/icons/icons";

const MusicPlayer = () => {
  const [currSong, setCurrSong] = useState<{
    id: number;
    name: string;
    song: string;
    progress?: number;
    lenght?: number;
  }>(songData[0]);
  const [playing, setPlaying] = useState(false);
  const audioElem = useRef<HTMLAudioElement | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (audioElem.current) {
      if (playing) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }
  }, [playing]);

  const nextSong = () => {
    let newId = currSong.id + 1;
    if (!songData[newId]) {
      newId = 0;
    }
    setCurrSong(songData[newId]);
    if (audioElem.current) {
      audioElem.current.pause();
    }
  };

  const onPlaying = () => {
    if (audioElem.current) {
      const duration = audioElem.current.duration;
      const currentTime = audioElem.current.currentTime;
      setCurrSong({
        ...currSong,
        progress: Math.floor((currentTime / duration) * 100),
        lenght: duration,
      });
    }
  };

  return (
    <>
      {isOpen ? (
        <></>
      ) : (
        <div className={style.music_player}>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={style.close}
          >
            <img src={icon__close} width="30px" />
          </button>
          <h2>{currSong.name}</h2>
          <audio
            onTimeUpdate={onPlaying}
            ref={audioElem}
            src={currSong.song}
          ></audio>
          <p>{currSong.lenght}</p>
          <Slider
            size="small"
            aria-label="small"
            value={currSong.progress}
            min={0}
            max={currSong.lenght}
          />
          <div className={style.buttons}>
            <button onClick={nextSong}>
              <img src={icon__forward} />
            </button>
            <button onClick={() => setPlaying((prev) => !prev)}>
              <img src={icon__play} />
            </button>
            <button onClick={nextSong}>
              <img src={icon__forward} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default MusicPlayer;
