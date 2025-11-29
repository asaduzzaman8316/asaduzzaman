import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseurl  = 'http://asaduzzaman-dev.vercel.app/'
    return [
        {
            url: baseurl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority:1
        }
    ]
}