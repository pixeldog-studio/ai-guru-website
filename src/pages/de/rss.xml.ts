import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (
    await getCollection('blog', ({ data }) => {
      return data.lang === 'de' && !data.draft;
    })
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Hustlrr Blog',
    description: 'Einblicke in KI-Modelle, Produktivität und Workflows',
    site: context.site!.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/de/blog/${post.id.replace(/^de\//, '')}/`,
    })),
    customData: '<language>de</language>',
  });
}
