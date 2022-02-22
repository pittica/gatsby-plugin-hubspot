export function onRouteUpdate(_, { region, portal, cookie }) {
  return new Promise((resolve) => {
    if (document.cookie.match(`(^|;) ?${cookie}=([^;]*)(;|$)`)) {
      const body = document.getElementsByTagName("body")[0]
      const script = document.createElement(`script`)

      script.type = "text/javascript"
      script.id = "hs-script-loader"
      script.async = true
      script.defer = true
      script.src = `//${
        region ? `js-${region}` : "js"
      }.hs-scripts.com/${portal}.js`

      body.appendChild(script)

      resolve(true)
    }
  })
}
