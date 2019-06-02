import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';

import './style.css';

function PortalExample() {
  const portal = useRef()
  const [classList, setClassList] = useState(['portal'])
  const className = classList.join(' ')

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
      ref={portal}
      onClick={() => setClassList(list => [...list, 'portal-reveal'])}
      onTransitionEnd={(e) => e.propertyName === 'transform' && portal.current.activate()}
    />
  );
}

render(<PortalExample />, document.getElementById('root'));
