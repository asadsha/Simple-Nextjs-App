import React, { ReactElement, FC } from 'react';
import 'antd/dist/antd.css';

interface P {
  Component: FC;
  pageProps: Record<string, string>;
}

const App = ({ Component, pageProps }: P): ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default App;
