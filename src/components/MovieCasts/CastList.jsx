import { CastListItem } from '../CastListItem/CastListItem';

export const CastList = ({ data }) => {
  //   console.log(data);
  return (
    <ul>
      {data
        .filter(item => item.profile_path !== null)
        .map(item => (
          <CastListItem data={item} key={item.id} />
        ))}
    </ul>
  );
};
