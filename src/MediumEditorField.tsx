// Based on material-ui TextField
// https://github.com/mui-org/material-ui/tree/master/packages/material-ui/src/TextField

import * as React from 'react';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl, { useFormControl } from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import MediumEditor from './MediumEditor';

const variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
};

// Okay, this logic is way crazy... was needed to set the label appropriately
// when already filled.  For some reason it detects as filled, then not filled
// at load
const FilledHandler = ({ value }) => {
  const { onFilled, filled } = useFormControl();

  React.useEffect(() => {
    if (!filled && onFilled && value && value.trim()) {
      //setTimeout(onFilled, 10);
      onFilled();
    }
  }, [value, filled]);
  return null;
};

/**
 * The `MediumEditorField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <MediumEditorField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of MediumEditorField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */
const MediumEditorField = React.forwardRef(function MediumEditorField(props: any, ref) {
  const containerEl = React.useRef();

  const {
    autoComplete,
    autoFocus = false,
    children,
    classes,
    className,
    color = 'primary',
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps,
    fullWidth = false,
    helperText,
    hiddenLabel,
    id,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    rowsMax,
    type,
    value,
    variant = 'standard',
    ...other
  } = props;

  React.useEffect(() => {
    // work around TS for now
    var defaultNode = { addEventListener: (a, b) => {}, querySelector: a => ({ focus: () => {} }) };

    var node = containerEl ? containerEl?.current ?? defaultNode : defaultNode;
    node.addEventListener('click', () => {
      setTimeout(() => node?.querySelector('[contenteditable]').focus(), 10);
    });
  }, []);

  const InputMore: any = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }
    if (label) {
      const displayRequired = (InputLabelProps && InputLabelProps.required) || required;
      InputMore.label = (
        <React.Fragment>
          {label}
          {displayRequired && '\u00a0*'}
        </React.Fragment>
      );
    }
  }

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputComponent = variantComponent[variant];
  const InputElement = (
    <InputComponent
      aria-describedby={helperTextId}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      fullWidth={fullWidth}
      multiline={multiline}
      name={name}
      rows={rows}
      rowsMax={rowsMax}
      type={type}
      value={(value || '').trim()}
      id={id}
      inputRef={inputRef}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      inputProps={{
        ...inputProps,
        options: {
          placeholder: false,
          toolbar: {
            buttons: ['bold', 'italic', 'h1', 'h2', 'h3', 'anchor', 'orderedlist', 'unorderedlist'],
          },
        },
        style: {
          width: 'calc(100% + 28px)',
          outline: '0px solid transparent',
          margin: '-18.5px -14px',
          padding: '18.5px 14px',
          ...(inputProps && inputProps.style),
        },
        height: rows ? `calc(${rows * 1.25}em + 37px)` : null,
        minHeight: '1em',
      }}
      {...InputMore}
      {...InputProps}
      inputComponent={MediumEditor}
    />
  );

  return (
    <FormControl
      className={clsx(classes.root, className)}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      hiddenLabel={hiddenLabel}
      ref={containerEl}
      required={required}
      color={color}
      variant={variant}
      {...other}>
      <FilledHandler value={value} />

      {label && (
        <InputLabel htmlFor={id} id={inputLabelId} {...InputLabelProps}>
          {label}
        </InputLabel>
      )}
      {InputElement}

      {helperText && (
        <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
});

export default React.memo(MediumEditorField);
