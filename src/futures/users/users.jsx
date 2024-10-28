import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./users.api";
import { Link } from "react-router-dom";

export const Users = () => {
    const users = useSelector((state) => state.accounts);
    const status = useSelector((state) => state.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <>
        <Link to="add">add user</Link>
            <h3>Total Users: {users.length}</h3>
            <h3>Status: {status}</h3>
            {status === "loading" && <p>Loading users...</p>}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
};
