-- Run this in the Supabase SQL editor

-- Teen signups
create table if not exists teen_signups (
  id                uuid        default gen_random_uuid() primary key,
  created_at        timestamptz default now(),
  full_name         text        not null,
  preferred_contact text        not null,
  whatsapp          text,
  instagram         text,
  goals             text[]      not null default '{}',
  how_found         text,
  status            text        default 'pending'
);

-- Allow public inserts (no auth required)
alter table teen_signups enable row level security;
create policy "Allow public inserts on teen_signups"
  on teen_signups for insert with check (true);

-- School inquiries
create table if not exists school_inquiries (
  id                uuid        default gen_random_uuid() primary key,
  created_at        timestamptz default now(),
  full_name         text        not null,
  role              text        not null,
  organisation_name text        not null,
  city              text        not null,
  interests         text[]      not null default '{}',
  email             text        not null,
  status            text        default 'pending'
);

alter table school_inquiries enable row level security;
create policy "Allow public inserts on school_inquiries"
  on school_inquiries for insert with check (true);

-- Volunteer applications
create table if not exists volunteer_applications (
  id                uuid        default gen_random_uuid() primary key,
  created_at        timestamptz default now(),
  full_name         text        not null,
  age               integer     not null,
  city              text        not null,
  preferred_contact text        not null,
  email             text        not null,
  whatsapp          text,
  instagram         text,
  team_interest     text[]      not null default '{}',
  status            text        default 'pending'
);

alter table volunteer_applications enable row level security;
create policy "Allow public inserts on volunteer_applications"
  on volunteer_applications for insert with check (true);
