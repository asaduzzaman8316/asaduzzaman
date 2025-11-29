import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseurl = 'http://asaduzzaman-dev.vercel.app/'
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: `${baseurl}/sitemap.xml`
    }
}