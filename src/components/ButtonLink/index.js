import React from 'react';
// import './styles.css';

function ButtonLink({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

export default ButtonLink;
