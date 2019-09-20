const getters = {
  token: state => state.user.token,
  online: state => state.user.online,
  userid: state => state.user.userid,
  username: state => state.user.username,
  roles: state => state.user.roles
}
export default getters
