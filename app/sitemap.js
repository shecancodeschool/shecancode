export default function sitemap() {
    return [
      {
        url: 'https://shecancode.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 1,
      },
      {
        url: 'https://shecancodeschool.org/courses',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://shecancodeschool.org/articles',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://shecancodeschool.org/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://shecancodeschool.org/what-we-do',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://shecancodeschool.org/our-team',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: 'https://shecancodeschool.org/contact-us',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ]
  }
