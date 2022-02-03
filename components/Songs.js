import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

const Songs = () => {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks.items.map((item, i) => (
        item.track && <Song key={item.track.id + i} track={item} order={i} />
      ))}
    </div>
  )
}

export default Songs
