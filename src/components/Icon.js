import React from 'react';

const paths = {
  arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
  external: <path d="M7 17 17 7M7 7h10v10" />,
  code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  accessibility: <><circle cx="12" cy="4" r="2" /><path d="m4 8 8 2 8-2M12 10v5m0 0-5 6m5-6 5 6" /></>,
  activity: <path d="M2 12h5l3-8 4 16 3-8h5" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  github: <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-2-.5-2.5 3-.4 6-1.5 6-6a4.7 4.7 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.2s-1-.3-3.4 1.3a12 12 0 0 0-6.4 0C6.9 2.7 5.9 3 5.9 3a4.4 4.4 0 0 0-.1 3.2A4.7 4.7 0 0 0 4.5 9.5c0 4.5 3 5.6 6 6-.6.5-.5 1.5-.5 2.5v4" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7m0-10v.01M11 17v-7m0 3c0-4 6-4 6 0v4" /></>,
};

export default function Icon({name, size = 20, ...props}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>;
}
