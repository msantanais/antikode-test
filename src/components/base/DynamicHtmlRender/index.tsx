import React, { useEffect } from 'react';

const DynamicHtmlComponent: React.FC<DynamicHtmlPropsType> = ({ id, html }) => {
  useEffect(() => {
    const newElement = document.createElement('div');
    newElement.innerHTML = html;
    const parent = document.getElementById(id);
    if (parent) {
      parent.appendChild(newElement.firstChild as Node);
    }
  }, [id, html]);

  return (
    <div id={id}></div>
  );
};

export default DynamicHtmlComponent;