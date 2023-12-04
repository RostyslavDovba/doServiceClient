'use client';
import React, { useState } from 'react';
import MainLayout from '../../../layout/MainLayout';
import StepWrapper from '@/components/StepWrapper';
import { Button, Grid, TextField } from '@mui/material';
import FileUpload from '@/components/FileUpload';
import { useInput } from '@/hooks/useInput';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const router = useRouter();

  const stepBack = () => {
    setActiveStep((prev) => prev - 1);
  };
  const stepNext = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('picture', picture!);
      formData.append('audio', audio!);
      axios
        .post('http://localhost:5001/tracks', formData)
        .then((resp) => router.push('/tracks'))
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: 20 }}>
            <TextField
              {...name}
              label={'Назва треку'}
              style={{ marginTop: 10 }}
            />
            <TextField
              {...artist}
              label={`Ім'я виконавця`}
              style={{ marginTop: 10 }}
            />
            <TextField
              {...text}
              label={'Слова до пісні'}
              multiline
              rows={3}
              style={{ marginTop: 10 }}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Завантажити обкладинку</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Завантажити трек</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent={'space-between'}>
        <Button disabled={activeStep === 0} onClick={stepBack}>
          Назад
        </Button>
        <Button onClick={stepNext}>Вперед</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
