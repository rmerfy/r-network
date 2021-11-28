import React from "react";
import User from "./User";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        avatarUrl:
          "https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico",
        name: "Ivan",
        status: "some status here",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 2,
        followed: false,
        avatarUrl:
          "https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico",
        name: "Dmitry",
        status: "my status",
        location: { city: "Boston", country: "USA" },
      },
      {
        id: 3,
        followed: true,
        avatarUrl:
          "https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico",
        name: "Oleg",
        status: "some status here too",
        location: { city: "London", country: "England" },
      },
      {
        id: 4,
        followed: false,
        avatarUrl:
          "https://iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico",
        name: "Mark",
        status: "some status here too",
        location: { city: "London", country: "England" },
      },
    ]);
  }

  debugger

  const UsersMap = props.users.map((m) => {
    return (
      <User
        key={m.id}
        id={m.id}
        avatarUrl={m.avatarUrl}
        name={m.name}
        followed={m.followed}
        status={m.status}
        location={m.location}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Пользователи</h1>
      <div className="flex flex-wrap gap-5">{UsersMap}</div>
    </div>
  );
};

export default Users;
