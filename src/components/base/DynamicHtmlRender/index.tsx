'use client';

import React, { useEffect, useRef } from 'react';

const DynamicHtmlRender: React.FC<DynamicHtmlPropsType> = ({ id, html }) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const newElement = document.createElement('div');
      newElement.innerHTML = html;
      const parent = document.getElementById(id);
      if (parent) {
        parent.appendChild(newElement as Node);
      }
    } else {
      // Mark the component as mounted
      isMounted.current = true;
    }
  }, [id, html]);

  return <div id={id}></div>;
};

export default DynamicHtmlRender;
