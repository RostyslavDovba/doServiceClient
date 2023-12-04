import ThemeButton from '@/components/ThemeButton';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeButton />
      <p className="dark:hover:bg-red-700 text-slate-900 dark:text-white mt-5 dark:bg-slate-400 text-base font-medium tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque
        voluptatibus earum fugit deserunt omnis asperiores beatae iure quidem,
        modi ratione amet eaque recusandae qui porro. Corrupti deleniti illo
        consectetur?
      </p>
      {children}
    </div>
  );
};

export default layout;
