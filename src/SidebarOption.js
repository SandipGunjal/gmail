import React from 'react';
import './sidebaroption.css'

const SidebarOption = ({Icon,title,number,selected}) => {
  return (
    <div className={`sidebar_option ${selected && "sidebaroption--active"}`}>
      <Icon></Icon>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
