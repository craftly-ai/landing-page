import React from "react"

const SearchBar = props => {
  const { url } = props

  return (
    <>
      <div className="sts-bar">
        <div className="btn-desktop">
          <i />
          <i />
          <i />
        </div>
        <span>{url}</span>
      </div>
    </>
  )
}

export default SearchBar
