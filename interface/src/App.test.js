import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import reducers from './reducers'

const middlewares = []
const mockStore = configureStore(middlewares)

it('renders without crashing', () => {
  const initialState = { layers: {layers: []}, indicators: {indicators: [ {"available_times": {"intervals": [], "points": [], "contained_points": {}} } ]}, point: {lat: null, lng: null}, time: {selected_time: Date.now(), active_time: Date.now(), valid_times: []} }
  const store = mockStore(initialState)
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
