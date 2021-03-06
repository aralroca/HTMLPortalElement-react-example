import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import './style.css';

function PortalExample() {
  const [classList, setClassList] = useState(['portal'])
  const className = classList.join(' ')

  // Fade in effect loading the portal
  useEffect(() => {
    const fadein = setTimeout(_ =>
     setClassList(list => [...list, 'fade-in']), 1000);

    return () => clearTimeout(fadein)
  }, [])

  if (!window.HTMLPortalElement) {
    return 'HTMLPortalElement is not supported in your browser.'
  }

  return (
    <portal
      src="https://www.aralroca.com"
      className={className}
      onClick={() => setClassList(list => [...list, 'portal-reveal'])}
      onTransitionEnd={(e) => e.propertyName === 'transform' && e.target.activate()}
    />
  );
}

render(<PortalExample />, document.getElementById('root'));
