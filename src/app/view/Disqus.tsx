'use client';

import { useEffect } from 'react';

interface DisqusProps {
  url: string;
  identifier: string;
  title: string;
}

export default function Disqus({ url, identifier, title }: DisqusProps) {
  const shortname = 'telegraview'; // Ensure this matches your Disqus Admin > Settings > Shortname

  useEffect(() => {
    // Helper to check if script is already there
    const existingScript = document.getElementById('disqus-script');
    
    // Config function
    const config = function (this: any) {
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
    };

    if ((window as any).DISQUS) {
      // If loaded, reset
      (window as any).DISQUS.reset({
        reload: true,
        config: config,
      });
    } else {
      // If not loaded, inject
      if (!existingScript) {
        const d = document;
        const s = d.createElement('script');
        s.src = `https://${shortname}.disqus.com/embed.js`;
        s.setAttribute('data-timestamp', (+new Date()).toString());
        s.id = 'disqus-script';
        (d.head || d.body).appendChild(s);
        
        // Set the config for the first load
        (window as any).disqus_config = config;
      }
    }
  }, [url, identifier, title, shortname]);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 mt-8 bg-gray-900/50 rounded-lg min-h-[150px]">
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </div>
  );
}
