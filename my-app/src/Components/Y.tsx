import React from 'react';

function Y() {
    document.querySelector('.right')?.addEventListener('click',()=>handleParentClick())
  
  const handleParentClick = () => {
    alert('Parent clicked');
  };

  // Child click handler
  const handleChildClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevents the event from bubbling up to the parent
    alert('Child clicked');
  };

  return (
    <div onClick={handleParentClick} style={{ padding: '50px', background: 'lightblue' }}>
      <button onClick={handleChildClick} style={{ padding: '20px', background: 'lightcoral' }}>
        Click Me
      </button>
    </div>
  );
}

export default Y;
