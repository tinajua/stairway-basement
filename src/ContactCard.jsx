import React from 'react';

export default function ContactCard({ id, name, title, email, board, image }) {
  const isCharlie = id === 'charlie';

  return (
    <div
      style={{
        border: '1px solid green',
        backgroundColor: '#003366', // Dark BA-style blue
        width: 300,
        height: 400,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 12,
        boxShadow: '0 0 16px rgba(0,0,0,0.2)',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: 100,
          height: 120,
          borderRadius: isCharlie ? 8 : '50%',
          objectFit: 'cover',
          marginBottom: 16,
          border: '1px solid rgb(152, 69, 248)',
          boxShadow: isCharlie
            ? '0 0 8px 2px #d1b26f, 0 0 16px 4px #a259f7'
            : '0 0 8px 1px #d1b26f, 0 0 16px 2px rgb(152, 69, 248)',
        }}
      />
      <h2 style={{ margin: 0, fontSize: 20, color: '#fff' }}>{name}</h2>
      <div style={{ fontSize: 16, color: '#555', marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 14, color: '#333' }}>{email}</div>
      <div style={{ fontSize: 14, color: '#333' }}>{board}</div>
    </div>
  );
}
