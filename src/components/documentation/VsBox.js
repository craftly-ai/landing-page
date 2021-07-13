import React from "react"

const VsBox = props => {
  const { title, leftHeading, rightHeading, row } = props
  return (
    <div className="vs-box-wrap ptb80">
      <h4 dangerouslySetInnerHTML={{ __html: title }} />
      <table>
        <tbody>
          <tr>
            <th dangerouslySetInnerHTML={{ __html: leftHeading }} />
            <th dangerouslySetInnerHTML={{ __html: rightHeading }} />
          </tr>
          {row.map(e => {
            console.log(e)
            return (
              <tr>
                <td dangerouslySetInnerHTML={{ __html: e.leftContent }} />
                <td dangerouslySetInnerHTML={{ __html: e.rightContent }} />
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default VsBox
