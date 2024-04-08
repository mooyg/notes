import { createClient, FetchTransport } from '@rspc/client';
import type { Procedures } from './bindings';

export const client = createClient<Procedures>({
  transport: new FetchTransport('http://localhost:3000/rspc'),
});
