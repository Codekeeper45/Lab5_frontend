import React from 'react';
import type { User } from '../types/index.ts';
import SkillList from './SkillList.tsx';

interface UserCardProps {
    user: User;
    isActive?: boolean;
    children: React.ReactNode;
}

const UserCard = ({ user, isActive = true, children }: UserCardProps) => {
    return (
        <div style={{ 
            border: '1px solid #ccc', 
            padding: '16px', 
            marginBottom: '16px', 
            backgroundColor: isActive ? '#e0ffe0' : '#ffe0e0', 
            opacity: isActive ? 1 : 0.5,
            color: '#000' 
        }}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            
            <div>
                <strong>Skills:</strong>
                <SkillList skills={user.skills} />
            </div>
            {children}
        </div>
    );
};

export default UserCard;