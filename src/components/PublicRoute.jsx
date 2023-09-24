import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute({redirectTo="/contacts", resticted='false'}) {
    const { token } = useSelector((state) => state.auth);
    const shouldRedirect = token && resticted;
    return shouldRedirect ? (
        <Navigate to={redirectTo} />
    ) : (
        <Suspense fallback={<div>loading...</div>}>
            <Outlet />
        </Suspense>
    );
}

export default PublicRoute;