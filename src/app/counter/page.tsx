'use client';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { useEffect, useCallback, useState, useTransition } from 'react';
import Image from 'next/image';

export default function Counter() {
  const count = useTypedSelector((state) => state.counter.value);
  const { increment, decrement } = useActions();
  let someData = 9;
  const [currency, setCurrency] = useState();
  const [users, setUsers] = useState([]);
  const [img, setImg] = useState('');
  const [startTransition, isPending] = useTransition();

  const getImg = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setImg(
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png',
        );
      }, 3000);
    });
  };

  // const getCurrencyAndUsers = useCallback(async () => {
  //   const res = await fetch(
  //     // 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20191021&json',
  //     // 'https://api.privatbank.ua/p24api/exchange_rates?json&date=01.11.2020',
  //     'http://localhost:5001/users',
  //   );
  //   const data = await res.json();
  //   // console.log('🚀 ~ file: page.tsx:19 ~ getCurrencyAndUsers ~ data:', data);
  //   setCurrency(data[0]);
  //   setUsers(data[1]);
  // }, []);

  // useEffect(() => {
  //   getCurrencyAndUsers();
  // }, []);

  // const getCurrencyAndUsers = async () => {
  //   const res = await fetch(
  //     // 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20191021&json',
  //     // 'https://api.privatbank.ua/p24api/exchange_rates?json&date=01.11.2020',
  //     'http://localhost:5001/users',
  //   );
  //   const data = await res.json();
  //   // console.log('🚀 ~ file: page.tsx:19 ~ getCurrencyAndUsers ~ data:', data);
  //   // setCurrency(data[0]);
  //   setUsers(data);
  // };

  useEffect(() => {
    // getCurrencyAndUsers();
    getImg();
  }, []);

  return (
    <div>
      {/* <ul>
        {users.length &&
          users.map((el) => {
            return (
              <div key={el.username}>
                <h2>{el.username}</h2>
                <div>
                  {el.todos.map((el, index) => {
                    return <div key={el.name + index}>{el.name}</div>;
                  })}
                </div>
              </div>
            );
          })}
      </ul> */}
      {img && <Image src={img} alt="Some text" width={250} height={250} />}

      <div>
        <button aria-label="Increment value" onClick={() => increment()}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => decrement()}>
          Decrement
        </button>
        {/* <FetchedData /> */}
      </div>
    </div>
  );
}
