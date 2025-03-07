// import { createClient } from '@supabase/supabase-js';
// import { PROJECT_URL, API_KEY } from '@env'; // ✅ Correct import

// if (!PROJECT_URL || !API_KEY) {
//   throw new Error('Missing Supabase environment variables! Check your .env file.');
// }

// export const supabase = createClient(PROJECT_URL, API_KEY);

import { createClient } from '@supabase/supabase-js';
import { PROJECT_URL, API_KEY } from '@env'; // ✅ Correct import

if (!PROJECT_URL || !API_KEY) {
  throw new Error('Missing Supabase environment variables! Check your .env file.');
}

export const supabase = createClient(PROJECT_URL, API_KEY);
