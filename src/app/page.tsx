'use client';
import MainLayout from '@/layout/MainLayout';

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Вітаю!</h1>
          <h3>Тут зібрані ліпше треки</h3>
        </div>
      </MainLayout>
      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;
