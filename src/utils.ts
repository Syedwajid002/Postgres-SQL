import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:npg_LPfWVTdFz24l@ep-red-cherry-a5hbduwn-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require ");
    await client.connect();
    return client;
}