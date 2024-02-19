'use client';

import React, { useEffect, useRef } from 'react';

const DynamicHtmlRender: React.FC<DynamicHtmlPropsType> = ({ id, html }) => {
  useEffect(() => {
    const newElement = document.createElement('div');
    newElement.innerHTML = html;
    const parent = document.getElementById(id);
    const child = parent?.children.length
    if (parent && child === 0) {
      parent.appendChild(newElement as Node);
    }
  }, [id, html]);

  return <div id={id}></div>;
};

export default DynamicHtmlRender;
