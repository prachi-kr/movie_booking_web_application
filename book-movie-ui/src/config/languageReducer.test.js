import { languageReducer } from './languageReducer';
import { languagesFetchSuccess } from './configActions';

const languageData = {
  languages: [{ language_code: 'ENG', language: 'English' },
    { language_code: 'KAN', language: 'Kannada' },
    { language_code: 'HIN', language: 'Hindi' },
    { language_code: 'TML', language: 'Tamil' },
    { language_code: 'TLG', language: 'Telugu' }],
};


describe('Language Reducer', () => {
  it('should return language state', () => {
    expect(languageReducer({ languages: [] }, languagesFetchSuccess(languageData))).toEqual({
      languages: languageData,
    });
  });
});

