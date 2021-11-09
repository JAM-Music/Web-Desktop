const aliases = (prefix = `src`) => ({
  "@src": `${prefix}`,
  "@screens": `${prefix}/screens`,
  "@validators": `${prefix}/utils/validators`,
  "@utils": `${prefix}/utils`,
  "@assets": `${prefix}/assets`,
  "@config": `${prefix}/config`,
  "@hooks": `${prefix}/hooks`,
  "@navigation": `${prefix}/navigation`,
  "@redux": `${prefix}/store`,
  "@services": `${prefix}/services`,
});

module.exports = aliases;
