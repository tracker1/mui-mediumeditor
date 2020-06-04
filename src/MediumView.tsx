import * as React from 'react';

export default ({ html, style, className, ref, ...props }) => (
  <div style={style} className={className} ref={ref} dangerouslySetInnerHTML={{ __html: html || '' }} {...props} />
);
