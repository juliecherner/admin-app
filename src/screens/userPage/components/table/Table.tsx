type Props = {
  userId: string | undefined;
};

export const Table = ({ userId }: Props) => {
  return <div>table, {userId}</div>;
};
