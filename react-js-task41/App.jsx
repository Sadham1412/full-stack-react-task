
import {
  useState,
  useEffect,
  useCallback,
  useMemo
} from "react";

function App() {

  const [users, setUsers] =
    useState([]);

  const [search, setSearch] =
    useState("");

  // fetch function
  const fetchUsers = useCallback(() => {

    const controller =
      new AbortController();

    fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        signal: controller.signal
      }
    )

    .then((res) => res.json())

    .then((data) => {

      // filter users
      const filterData =
        data.filter((user) =>
          user.name
          .toLowerCase()
          .includes(search.toLowerCase())
        );

      setUsers(filterData);
    });

    // cleanup
    return () => {
      controller.abort();

      console.log("Cleanup Run");
    };

  }, [search]);

  // useEffect
  useEffect(() => {

    const cleanup =
      fetchUsers();

    return cleanup;

  }, [fetchUsers]);

  // expensive calculation
  const totalUsers = useMemo(() => {

    console.log("Calculating...");

    return users.length;

  }, [users]);

  return (

    <div>

      <h1>User List</h1>

      {/* filter input */}
      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {/* refresh button */}
      <button onClick={fetchUsers}>
        Refresh
      </button>

      {/* total users */}
      <h2>
        Total Users: {totalUsers}
      </h2>

      {/* user list */}
      {
        users.map((user) => (

          <h3 key={user.id}>
            {user.name}
          </h3>

        ))
      }

    </div>
  );
}

export default App;