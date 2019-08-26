import React from 'react';

const withClass = (WrapperComponent, classess) => {
  return props => (
    <div className={classess}>
      <WrapperComponent {...props} />
    </div>
  );
}

export default withClass;