import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import getUser from '../redux/user/UserAction';

const User = () => {
    const users = useSelector(state => state.user.users);
    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch]);

    return (
        <>
        {loading && <p>Loading.....</p>}
        {users.length > 0 && users.map((user) => (
            <Card user={user} key={`user-${user.name}`} />
        ))}
        {error && !loading && <p>Error</p>}
        </>
    )
};

export default User;