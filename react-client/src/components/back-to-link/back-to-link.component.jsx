import React from 'react';

import {BackToContainer} from './back-to-link.styles';

const BackToLink = ({destination, ...otherProps}) => (
    <BackToContainer {...otherProps}>
      &lt; Back to {destination}
    </BackToContainer>
);

export default BackToLink;