const { createClient } = require('@supabase/supabase-js');
const ws = require('ws');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    realtime: {
      transport: ws
    }
  }
);

async function test() {
  const { data, error } = await supabase.from('teen_signups').insert([
    {
      full_name: 'Test Name',
      preferred_contact: 'whatsapp',
      whatsapp: '1234567890',
      goals: ['Read more'],
      how_found: 'Instagram'
    }
  ]);
  console.log('Error:', error);
  console.log('Data:', data);
  process.exit();
}

test();
