'use client';
import MainLayout from '@/layout/MainLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ITrack } from '@/types/tracks';
import TrackList from '@/components/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { fetchTracks, searchTrack } from '@/store/actions/track';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { Metadata } from 'next/types';
import { useState } from 'react';

const Index = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState<string>('');

  const [timer, setTimer] = useState(null);

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }

    // add Bouncer
    // setTimer(
    //   setTimeout(async () => {
    await dispatch(await searchTrack(query));
    // }, 1000),
    // );
  };

  const { tracks, error } = useTypedSelector((state) => state.track);
  // useDispatch(fetchTracks)
  useEffect(() => {
    dispatch(fetchTracks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Track List">
      <Grid container justifyContent={'center'}>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent={'space-between'}>
              <h1>Список Треків</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Завантажити
              </Button>
            </Grid>
          </Box>
          <TextField fullWidth value={query} onChange={search} />
          <TrackList tracks={tracks}></TrackList>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
