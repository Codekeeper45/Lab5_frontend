import React from 'react';
import type { User } from './types/index.ts';
import UserCard from './components/UserCard.tsx';
import { useState } from 'react';

const INITIAL_USERS: User[] = [
    { 
        name: 'Alice', 
        email: 'alice@example.com', 
        age: 30, 
        skills: [{ id: 1, name: 'React', level: 'intermediate' }] 
    },
    { 
        name: 'Bob', 
        email: 'bob@example.com', 
        age: 25, 
        skills: [{ id: 2, name: 'TypeScript', level: 'beginner' }] 
    },
    { 
        name: 'Charlie', 
        email: 'charlie@example.com', 
        age: 35, 
        skills: [{ id: 3, name: 'JavaScript', level: 'Expert' }] 
    },
    { 
        name: 'Emir', 
        email: 'Embro@mail.com', 
        age: 19, 
        skills: [{ id: 4, name: 'HTML/CSS', level: 'Expert' }] 
    }
];

const SearchApp = () => {
    // типизация состояния с использованием  дженериков
    const [users] = useState<User[]>(INITIAL_USERS);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_USERS);
    const [searchTerm, setSearchTerm] = useState<string>('');

    // типизированный обработчик ввода
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(term.toLowerCase())));
    };

    // типизированный обработчик клика
    const handleClear = () => {
        setSearchTerm('');
        setFilteredUsers(users);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>User Search</h1>
            <input
                type="text"
                placeholder='Filtered by name...'
                value={searchTerm}
                onChange={handleSearch}
                style={{
                    padding: '8px',
                    fontSize: '16px',
                    marginRight: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    color: '#000',
                    backgroundColor: '#fff'
                }}
            />
            <button onClick={handleClear}>Clear</button>

            <div style={{ marginTop: '20px' }}>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                        <UserCard key={index} user={user} isActive={user.age >= 21}>
                        <small>Student status: Verified</small>
                        </UserCard>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchApp;
