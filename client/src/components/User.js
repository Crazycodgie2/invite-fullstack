import { useInvite } from "../hooks"

export default props => {
  const { fetchUser, goingCount, notGoingCount, markUser, user } = useInvite

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="user">
      <div>
        <p>Going: {goingCount}</p>
        <p>Not Going: {notGoingCount}</p>
      </div>
      <img src={user.img} alt="foobar" />
      <p>{user.name}</p>
      <p>{user.phone}</p>
      <p>{user.email}</p>
      <div>
        <button onClick={() => markUser(true, user)}>Going</button>
        <button onClick={() => markUser(false, user)}>Going</button>
      </div>
    </div>
  )
}
