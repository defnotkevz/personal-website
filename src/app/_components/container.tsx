type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mr-auto ml-10 px-5">{children}</div>;
};

export default Container;
