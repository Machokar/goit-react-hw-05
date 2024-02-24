export const CastListItem = ({ data: { name, profile_path } }) => {
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
        alt={name}
        width={250}
        height={320}
      />
      <p>{name}</p>
    </li>
  );
};
