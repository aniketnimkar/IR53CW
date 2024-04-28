import "./App.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://randomuser.me/api/?results=3",
  );
  // console.log(data);
  return (
    <div>
      <h1>Random User</h1>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while featching users.</p>}
        {data && data.results && data.results.length > 0 ? (
          data.results.map((user, i) => (
            <div key={i}>
              <img src={user.picture.medium} alt="Iser Image"/>
              <p>Name: {user.name.first} {user.name.last}</p>
              <p>Email: {user.email}</p>
              <p>Loaction: {user.location.city}</p>
            </div>
          ))
        ) : (
          <p>Users not Found</p>
        )}
      </div>
    </div>
  );
}
