import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../styles/NavigationMenu.css';

const NavigationMenu = () => {
   return (
      <div className="MenuWrapper">
         <ListGroup>
            <ListGroup.Item active={true}>Dashboard</ListGroup.Item>
            <ListGroup.Item active={false}>Records</ListGroup.Item>
            <ListGroup.Item active={false}>Categories</ListGroup.Item>
            <ListGroup.Item active={false}>Budgets</ListGroup.Item>
         </ListGroup>
      </div>
   )
}

export default NavigationMenu;
