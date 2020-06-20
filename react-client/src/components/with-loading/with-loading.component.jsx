import React from 'react';
import MoonLoader from "react-spinners/MoonLoader";

import {LoaderContainer} from './with-loading.styles';

const WithLoading = Component => {
  return ({isLoading, ...props}) => (
    isLoading ?
    (<LoaderContainer>
      <MoonLoader size={50} color={"gray"} />
    </LoaderContainer>)
    :
    (<Component {...props} />)
  )
};

export default WithLoading;