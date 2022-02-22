import React, { useEffect } from "react"
import PropTypes from "prop-types"

export default function Form({ region, portalId, formId, locale, className }) {
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
  region: PropTypes.string.isRequired,
  portalId: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
}

Form.defaultProps = {
  className: "hubspot-form",
}
