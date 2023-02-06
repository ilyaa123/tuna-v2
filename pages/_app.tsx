import App from 'next/app';
import { Provider } from 'react-redux';
import { END } from 'redux-saga';
import { SagaStore, wrapper } from '../redux';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {
  
  // store.dispatch();

  
  // store.dispatch(END);
  // await (store as SagaStore).sagaTask?.toPromise();
  
  return {
    pageProps: {
      ...(await App.getInitialProps(context)).pageProps,
      pathname: context.ctx.pathname
    },
  }
  
})

export default MyApp