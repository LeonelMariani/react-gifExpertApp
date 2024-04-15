export const GiftItem = ({ title, url }) => {
  return (
    <>
      <li>{title}</li>
      <img src={url} alt={title} />
    </>
  );
};
