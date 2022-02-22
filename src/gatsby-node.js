exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    region: Joi.string().description(`Region code.`),
    portal: Joi.string().description(`Portal ID.`),
    cookie: Joi.string().description(`GDPR cookie name.`),
  })
}
