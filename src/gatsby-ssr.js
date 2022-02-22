import React from "react"

export function onRenderBody({ setHeadComponents }, { region }) {
  setHeadComponents([
    <script
      charSet="utf-8"
      type="text/javascript"
      src={`//${region ? `js-${region}` : `js`}.hsforms.net/forms/shell.js`}
      key="hs-forms"
    ></script>,
  ])
}
