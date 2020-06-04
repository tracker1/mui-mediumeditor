/**
 * NOTE: When loading this component, make sure to use an async loader as the
 * dependencies are relatively large.
 */
import 'medium-editor/dist/css/medium-editor.min.css';
import 'medium-editor/dist/css/themes/roman.css';

import * as React from 'react';
import MediumEditorBase from 'medium-editor';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function MediumEditor({
  name,
  value,
  options,
  onChange,
  height,
  minHeight,
  style,
  onBlur,
  onFocus,
  ref,
  ...props
}) {
  const editorEl = ref || React.useRef();

  React.useEffect(() => {
    const editor = new MediumEditorBase(editorEl.current, options);

    // re-focus for initial focus, loses with label animation
    editor.subscribe('focus', () =>
      delay(10)
        .then(() => editorEl.current.focus())
        .catch(() => {})
    );
    if (onFocus) editor.subscribe('focus', onFocus);

    // bubble onChange when text changed within blur event
    editor.subscribe('blur', e => {
      if (typeof onChange === 'function') {
        const newText = editorEl.current.innerHTML.trim();
        if (newText !== value) {
          onChange({ target: { name, value: newText } });
        }
      }

      // parent blur event
      if (onBlur) onBlur(e);
    });

    return () => editor.destroy();
  });

  style = style || {};
  if (height) {
    style.height = height;
    style.overflowY = 'auto';
  } else if (minHeight) {
    style.minHeight = minHeight;
  }

  return <div style={style} ref={editorEl} dangerouslySetInnerHTML={{ __html: value || '' }} {...props} />;
}

export default React.memo(MediumEditor);
