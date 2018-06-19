import { fetchAllLanguages, FETCH_LANGUAGE_SUCCESS } from './configActions';

import config from '../config';
import { mockStore, mock } from '../config/testSetupHelper';

let store;

const languageData = {
  languages: [{ language_code: 'ENG', language: 'English' },
    { language_code: 'KAN', language: 'Kannada' },
    { language_code: 'HIN', language: 'Hindi' },
    { language_code: 'TML', language: 'Tamil' },
    { language_code: 'TLG', language: 'Telugu' }],
};

describe('config', () => {
  beforeEach(() => {
    store = mockStore({
      languageReducer: {
        languages: [],
      },
    });
  });

  it('should return languages', async () => {
    mock
      .onGet(`${config.apiUrl}/config`)
      .reply(200, languageData);

    store.dispatch(fetchAllLanguages()).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: FETCH_LANGUAGE_SUCCESS,
        payload: languageData.languages,
      });
    });
  });
});

