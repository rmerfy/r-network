import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC, setTotalUsersAC, setCurrentPageAC } from "./../../redux/reducers/users-reducer";
import * as axios from "axios";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <Users 
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        currentPage={this.props.currentPage}
        pages={pages}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispathToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setTotalUsers: (total) => {
      dispatch(setTotalUsersAC(total));
    },
    setCurrentPage: (current) => {
      dispatch(setCurrentPageAC(current));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(UsersContainer);

