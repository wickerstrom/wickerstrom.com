import { createClient } from 'contentful'

const ContentfulClient = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_KEY
})

const revalidateValue = 10;

export { ContentfulClient, revalidateValue };