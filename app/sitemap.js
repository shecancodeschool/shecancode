export default function sitemap() {
    return [
      {
        url: 'https://shecancode.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 1,
      },
      {
        url: 'https://shecancode.vercel.app/courses',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://shecancode.vercel.app/articles',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://shecancode.vercel.app/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://shecancode.vercel.app/what-we-do',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://shecancode.vercel.app/our-team',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: 'https://shecancode.vercel.app/contact-us',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ]
  }
