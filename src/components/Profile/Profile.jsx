import ProfileStats from './ProfileStatus.module';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ProfileStats userStats={stats} />
    </div>
  );
}
