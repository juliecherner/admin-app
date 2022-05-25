type Props = {
  userId: string | undefined;
};

export const Contacts = ({ userId }: Props) => {
  return <div>contacts, {userId}</div>;
};
