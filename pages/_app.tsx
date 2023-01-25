import { GetServerSideProps } from 'next';
import type { AppProps } from 'next/app'
import App from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store'
import { userApi } from '../redux/user/userServices';

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

  store.dispatch(userApi.endpoints.getPosts.initiate(''))
  
  await Promise.all(store.dispatch(userApi.util.getRunningQueriesThunk()))
  
  return {
    pageProps: {
      ...(await App.getInitialProps(context)).pageProps,
      pathname: context.ctx.pathname
    },
  }
})

export default MyApp;