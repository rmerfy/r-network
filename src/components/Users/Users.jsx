import React from "react";
import User from "./User";
import * as axios from "axios";
import { log } from "@craco/craco/lib/logger";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users?page=1&count=3")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-5">Пользователи</h1>
        <div className="flex flex-wrap gap-5">
          {this.props.users.map((m) => {
            return (
              <User
                key={m.id}
                id={m.id}
                avatarUrl={m.photo}
                name={m.name}
                followed={m.followed}
                status={m.status}
                location={m.location}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// const Users = (props) => {
//   if (props.users.length === 0) {
//     axios
//       .get("https://social-network.samuraijs.com/api/1.0/users/6")
//       .then((response) => {
//         props.setUsers(response.data.items);
//       });
//   }

//   const UsersMap = props.users.map((m) => {
//     return (
//       <User
//         key={m.id}
//         id={m.id}
//         avatarUrl={m.photo}
//         name={m.name}
//         followed={m.followed}
//         status={m.status}
//         location={m.location}
//         follow={props.follow}
//         unfollow={props.unfollow}
//       />
//     );
//   });

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-5">Пользователи</h1>
//       <div className="flex flex-wrap gap-5">{UsersMap}</div>
//     </div>
//   );
// };

export default Users;
