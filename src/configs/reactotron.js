import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const reactotron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();
  reactotron.clear();
  console.tron = reactotron;
}
