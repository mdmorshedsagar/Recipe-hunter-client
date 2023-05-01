// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { authContext } from '../AuthProviders/AuthProviders';

const Blog = () => {
    const {user} = useContext(authContext)
    return (
        <div>
            <h1>sfdfsdfsdf :{user?.displayName}</h1>
        </div>
    );
};

export default Blog;