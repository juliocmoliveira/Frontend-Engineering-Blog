import * as contentful from 'contentful'

export const contentfulClient = contentful.createClient({
    space: import.meta.ENV.VITE_SPACE_ID,
    accessToken: import.meta.ENV.VITE_ACCESS_TOKEN,
});