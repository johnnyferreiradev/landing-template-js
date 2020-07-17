import React from 'react';
import ReactLoading from 'react-loading';

import StyledLoading from './styles';

export default function Loading({
  type,
  color,
  height,
  width,
  styles,
  id,
  className,
}) {
  return (
    <StyledLoading className={`loading ${className}`} id={id} style={styles}>
      <ReactLoading type={type} color={color} height={height} width={width} />
    </StyledLoading>
  );
}
