import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: 'UNIFAI',
    name: 'UNIFAI FE',
    icons: [
      {
        src: 'favicon.ico',
        sizes: '180x180 76x76 60x60 32x32 16x16',
        type: 'image/x-icon',
      },
    ],
    start_url: '.',
    display: 'standalone',
    theme_color: '#F5F5FA',
    background_color: '#F5F5FA',
  };
}
