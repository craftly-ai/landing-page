import React from "react"
import RightSidebarCard from "./../../components/blog/RightSidebarCard"

const RightSidebar = () => {
  return (
    <div className="right-conn">
      <div className="sidebar-item">
        <RightSidebarCard />
        <RightSidebarCard />
        <RightSidebarCard />
      </div>
    </div>
  )
}

export default RightSidebar
