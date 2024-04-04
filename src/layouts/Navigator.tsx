type Props = {
  children: React.ReactNode;
};

export default function Navigator({ children }: Props) {
  return (
    <>
      {children}
      <nav>navigator</nav>
    </>
  );
}
