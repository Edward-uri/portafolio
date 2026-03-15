import { SectionWrapper } from '../../components/SectionWrapper';
import { Card } from '../../components/Card';
import { blogPosts } from '../../data/portfolio.data';
import { FiArrowUpRight, FiClock } from 'react-icons/fi';

export const Blog = () => (
  <SectionWrapper id="blog">
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Blog Técnico</h2>
    <p className="text-neutral-500 text-sm mb-12">Proximamente</p>

    <div className="grid md:grid-cols-3 gap-5">
      {blogPosts.map((post, i) => (
        <a key={i} href={post.url} target="_blank" rel="noreferrer" className="group block">
          <Card className="h-full flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-indigo-400 mb-3 block">{post.tag}</span>
              <h3 className="text-white font-semibold text-base leading-snug mb-3
                group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{post.description}</p>
            </div>
          
          </Card>
        </a>
      ))}
    </div>
  </SectionWrapper>
);
