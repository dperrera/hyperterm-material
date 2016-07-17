exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: '#263238',
    borderColor: '#222d32',
    cursorColor: 'rgba(0, 150, 136, .5)',
    colors: [
      '#000000',
      '#FF5252',
      '#AED581',
      '#fee94e',
      '#2b98f0',
      '#b38bfc',
      '#68b6f3',
      '#939393',
      '#617d8a',
      '#fc625d',
      '#AED581',
      '#fee94e',
      '#2b98f0',
      '#b38bfc',
      '#68b6f3',
      '#b2ccd6'
    ],
    css: `
      ${config.css || ''}
      .hyperterm_main {
        border: none !important;
      }
      .header_header {
        background: #222d32 !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_active::before {
        border-bottom: 2px solid #009688;
      }
    `
  })
}
