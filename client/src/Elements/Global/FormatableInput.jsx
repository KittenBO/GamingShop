import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FormatableInput = ({ value, onChange, className, ...props }) => {
  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'video'],
      ['clean']
    ]
  };

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      className={className}
      modules={modules}
      {...props}
    />
  );
};

export default FormatableInput;
