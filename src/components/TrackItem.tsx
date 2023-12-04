import React from 'react';
import { ITrack } from '@/types/tracks';
import { Card, Grid, IconButton } from '@mui/material';
import styles from '@/styles/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useActions } from '@/hooks/useActions';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const play = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTrack(track);
    // playTrack();
  };
  const handleRedirection = () => {
    setActiveTrack(null);
  };
  return (
    <Card className={styles.track}>
      {/* <Card className={styles.track} onClick={() => router.push("/tracks/" + track._id)}> */}
      <IconButton style={{ marginRight: 10 }} onClick={play} id="playItemBtn">
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>

      <Link href={`/tracks/${track._id}`} onClick={handleRedirection}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <picture>
            <source srcSet={track.picture} media="(orientation: portrait)" />
            <img
              width={70}
              height={70}
              src={'http://localhost:5001/' + track.picture}
              alt={track.name}
            />
          </picture>
          <Grid
            container
            direction={'column'}
            style={{ width: 200, margin: '0 20px' }}
          >
            <div>{track.name}</div>
            <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
          </Grid>
        </div>
      </Link>
      {active && <div>02:42 / 03:32</div>}
      <IconButton
        style={{ marginLeft: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
