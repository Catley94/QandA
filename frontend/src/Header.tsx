import React from 'react';
import { UserIcon } from './Icons';

export const Header = () => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div>
      <a href="./">Q & A</a>
      <input
        onChange={handleSearchInputChange}
        type="text"
        placeholder="Search..."
      />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};
