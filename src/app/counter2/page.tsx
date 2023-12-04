'use client';
import React, { useEffect, useState, useTransition } from 'react';

const Counter2 = () => {
  const [todos, setTodos] = useState([]);
  const [isPending, startTransition] = useTransition();
  console.log('🚀 ~ file: page.tsx:7 ~ Counter2 ~ isPending:', isPending);

  const fetchData = () => {
    startTransition(() => {
      fetch('http://localhost:5001/users')
        .then((res) => res.json())
        .then((data) => setTodos(data[0].todos));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const todosList = todos?.map((el: { name: string; _id: string }) => {
    return <li key={el._id}>{el.name}</li>;
  });

  return (
    <div>
      <h1>List of users</h1>
      <div>{isPending ? <span>Loading...</span> : <ul>{todosList}</ul>}</div>
    </div>
  );
};

export default Counter2;
