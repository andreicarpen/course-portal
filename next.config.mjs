import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config here (if any)
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Add 'mdx'
};

// Configure MDX options (optional, customize as needed)
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [], // Add remark plugins here
    rehypePlugins: [], // Add rehype plugins here
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig); 