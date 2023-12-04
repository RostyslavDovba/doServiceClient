const getTracks = async () => {
  const res = await fetch('http://localhost:5001/tracks');
  return res.json();
};
const TrackLoad = async () => {
  const tracks = await getTracks();
  return (
    <div>
      <div>Some data</div>
      <ul>
        {tracks.map((track: { name: string }, index: number) => {
          return <li key={track.name + index}>{track.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default TrackLoad;
