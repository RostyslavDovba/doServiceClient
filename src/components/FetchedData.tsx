'use client';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAppDispatch } from '@/store';
import { fetchTracks } from '@/store/actions/track';
import React from 'react';
// test component
const FetchedData = () => {
  const dispatch = useAppDispatch();
  const { tracks, error } = useTypedSelector((state) => state.track);
  dispatch(fetchTracks());
  return (
    <div>
      <ul>
        {tracks.map((el) => {
          return <li key={el._id}>{el.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FetchedData;
