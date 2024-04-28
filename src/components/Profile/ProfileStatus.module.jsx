export default function ProfileStatus({userStats}) {
  const { stats: { followers, views, likes } } = userStats;
  return (
    <ul>
      <li>
        <span>Followers </span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views </span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes </span>
        <span>{likes}</span>
      </li>
    </ul>
  );
}