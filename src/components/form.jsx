import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"

import HubspotContext from "../context/hubspot-context"

export default function Form(props) {
  const context = useContext(HubspotContext)
  const region = props.region || context.region
  const portalId = props.portalId || context.portalId
  const formId = props.formId || context.formId
  const locale = props.locale || context.locale
  const { className } = props

  useEffect(() => {
    if (typeof window.hbspt !== "undefined") {
      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        locale,
        target: `.${className}-${region}-${formId}`,
      })
    }

    return () => {
      if (typeof document !== "undefined") {
        const forms = document.getElementsByClassName("hs-form-iframe")

        for (let i = 0; i < forms.length; i++) {
          forms[i].parentNode.removeChild(forms[i])
        }
      }
    }
  }, [region, portalId, formId, locale, className])

  return <div className={`${className}-${region}-${formId}`} />
}

Form.propTypes = {
  region: PropTypes.string,
  portalId: PropTypes.string,
  formId: PropTypes.string,
  locale: PropTypes.string,
  className: PropTypes.string,
}

Form.defaultProps = {
  className: "hubspot-form",
}
