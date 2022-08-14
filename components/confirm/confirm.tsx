import React from 'react';
import { Props } from './interface';

const defaultProps = {

};

const Confirm: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>Confirm</>;
  };

  export default Confirm;
