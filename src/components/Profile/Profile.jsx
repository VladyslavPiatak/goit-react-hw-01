import ProfileStats from "./ProfileStatus.module";

export default function Profile({userData: {username, tag, location, avatar}}) {
  return (
    <div>
      <div>
        <img
          src={avatar}
          alt="User avatar"
        />
        <p>{username}</p>
        <p>@{tag}</p>
          <p>{location}</p>
      </div>
      <ProfileStats userStats={userData} />
    </div>
  );
}




