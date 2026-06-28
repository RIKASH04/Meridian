import ProjectDetail from '@/components/ProjectDetail';

// Static generation parameters for high performance and SEO
export async function generateStaticParams() {
  return [
    { id: 'neighbourfriendly' },
    { id: 'krishimitra' },
    { id: 'clensifilters' },
    { id: 'wagyuprimeuae' },
    { id: 'alfredai' },
    { id: 'q-pro' },
  ];
}

export default function Page() {
  return <ProjectDetail />;
}
