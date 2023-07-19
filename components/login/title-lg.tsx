export type LoginTitleProps = {
  title: string;
};

export const TitleLg = ({ title }: LoginTitleProps) => {
  return (
    <div className="h-[10vh] justify-center items-center">
      <h1 /*</div>className={titleLG}*/>{title}</h1>
    </div>
  );
};
