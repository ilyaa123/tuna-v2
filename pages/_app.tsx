import App from 'next/app';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store/store';
import withReduxSaga from 'next-redux-saga';

import '../styles/globals.css'

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {

  store.dispatch({type: 'test'})

  return {
    pageProps: {
      ...(await App.getInitialProps(context)).pageProps,
      pathname: context.ctx.pathname
    },
  }
  
})

export default withReduxSaga(MyApp)