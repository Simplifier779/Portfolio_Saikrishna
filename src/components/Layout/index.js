import './index.scss';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <div className="App"> 
      <Sidebar />
      <div className="page"> 
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout;

/*<div className="page"> 
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet /> displays the content of the react component 
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>   USED TO DISPLAY HTML TYPE CONTENT IN REACT */
