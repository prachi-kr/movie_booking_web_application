import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const mockStore = configureMockStore([thunk]);
export const mock = new MockAdapter(axios);

