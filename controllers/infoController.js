// eslint-disable-next-line no-unused-vars
const { request, response } = require('express');

/**
 * GET info about the goals plugin.
 * @param {request} req Express request object.
 * @param {response} res Express response object.
 */

const getPluginInfo = (req, res) => {
  const pluginInfo = {
    id: 'xxx',
    name: 'Zuri-Goals',
    description: 'xxx',
    icon_url: 'xxx',
    sidebar_url: 'xxx',
    install_url: 'xxx',
    template_url: 'xxx',
  };

  res.status(200).json(pluginInfo);
};
module.exports = getPluginInfo;
