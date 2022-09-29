import { GlobalConfig } from '@eui/core';
import { environment } from '../environments/environment';  

export const GLOBAL: GlobalConfig = {
    appTitle: 'CSDR-app',
    i18n: {
        i18nService: {
            defaultLanguage: 'en',
            languages: ['en', 'fr'],
        },
        i18nLoader: {
            i18nFolders: ['i18n'],
        },
    },
    user: {
        defaultUserPreferences: {
            dashboard: { },
            lang: 'en',
        },
    },
};
