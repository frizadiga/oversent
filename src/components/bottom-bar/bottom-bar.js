import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const data = [
  {id: 1, caption: 'list', href: '/'},
  {id: 2, caption: 'detail', href: '/chat'}
]

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      {data && data.map((item, i) => 
        <Link to={item.href} key={item.id}>
          <div className="bottom-bar__item">{item.caption}</div>
        </Link>
      )}
    </div>
  )
}

export default BottomBar