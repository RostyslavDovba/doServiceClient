'use client';
import React, { useContext } from 'react';
import { ITrack } from '@/types/tracks';
import MainLayout from '@/layout/MainLayout';

import { Button, Grid, TextField } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useInput } from '@/hooks/useInput';
import Image from 'next/image';

interface IProps {
  params: { id: string };
}

// async function getTrack(id: string) {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   const response = await fetch(`http://localhost:5001/tracks/${id}`);
//   return response.json();
// }

const TrackPage = ({ params }: IProps) => {
  // const track = await getTrack(params.id);
  const [track, setTrack] = useState<ITrack>({} as ITrack);
  const [count, setCount] = useState(0);
  const userName = useInput('');
  const userText = useInput('');
  const getTrack = async () => {
    const response = await axios.get(
      `http://localhost:5001/tracks/${params.id}`,
    );
    setTrack(response.data);
  };

  useEffect(() => {
    getTrack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const addComment = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5001/tracks/comment',
        {
          username: userName.value,
          text: userText.value,
          trackId: track._id,
        },
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (e) {
      console.log(e);
    }
  };

  if (!track.picture) {
    return <p>Loading...</p>;
  }

  return (
    // <Error fallback="something went wrong">
    <MainLayout title={`${track.artist} - ${track.name}`}>
      <Link href="/tracks">
        <Button variant={'outlined'} style={{ fontSize: 32 }}>
          До списку
        </Button>
      </Link>
      <Grid container style={{ margin: '20px 0' }}>
        <Image
          src={'http://localhost:5001/' + track.picture}
          alt={track.name}
          width={200}
          height={200}
        />
        <div style={{ marginLeft: 30 }}>
          <h1>Назва треку - {track.name}</h1>
          <h2>Виконавець - {track.artist}</h2>
          <h3>Прослуховувань - {track.listens}</h3>
        </div>
      </Grid>
      <h2>Слова пісні</h2>
      <p>{track.text}</p>
      <h2>Коментарі</h2>
      <Grid container>
        <TextField label="Ваше ім'я" fullWidth {...userName} />
        <TextField
          label="Коментар"
          fullWidth
          multiline
          {...userText}
          rows={4}
          style={{ marginTop: 10 }}
        />
        <Button onClick={addComment}>Надіслати</Button>
      </Grid>
      <div>
        {track.comments?.map((comment) => (
          <div key={comment._id}>
            <div>{comment.username}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
    // </Error>
  );
};

export default TrackPage;
