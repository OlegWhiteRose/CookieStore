import { CorsOptions } from 'cors';

const getWhitelist = (): string[] => {
  const whitelist: string[] = [];
  
  if (process.env.NODE_ENV === 'development') {
    whitelist.push('http://localhost:5173');
  }
  
  if (process.env.DOMAIN) {
    const protocol = process.env.PROTOCOL || 'https';
    const domain = process.env.DOMAIN;
    whitelist.push(`${protocol}://${domain}`);
    whitelist.push(`${protocol}://www.${domain}`);
    
    if (protocol === 'https') {
      whitelist.push(`http://${domain}`);
      whitelist.push(`http://www.${domain}`);
    }
  }
  
  return whitelist;
};

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const whitelist = getWhitelist();
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
};
