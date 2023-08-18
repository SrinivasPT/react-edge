'use client';

import { decrement, increment, reset } from '@store/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useGetUsersQuery } from '@store/services/userApi';

export default function Home() {
    const count = useAppSelector(state => state.counterReducer.value);
    const dispatch = useAppDispatch();

    const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

    return (
        <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h4 style={{ marginBottom: 16 }}>{count}</h4>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(decrement())} style={{ marginInline: 16 }}>
                    decrement
                </button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>

            {error ? (
                <p>Oh no, there was an error</p>
            ) : isLoading || isFetching ? (
                <p>Loading...</p>
            ) : data ? (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        gap: 20,
                    }}
                >
                    {data.map(user => (
                        <div key={user.id} style={{ border: '1px solid #ccc', textAlign: 'center' }}>
                            <h3>{user.login}</h3>
                        </div>
                    ))}
                </div>
            ) : null}
        </main>
    );
}
