import { db, Bulletin, coverpage } from 'astro:db';
import { getslug } from '../src/data/bulletins';

// https://astro.build/db/seed
export default async function seed() {
  const newDate = new Date();
  const slug = getslug(newDate);

  await db.insert(Bulletin).values({
    coverImageUrl: "https://picsum.photos/id/24/560/315",
    sermonDate: newDate,
    slug: slug,
    serviceType: "Sunday Service",
    sermonPreacher: "Pastor Ryan Doe",
    bibleReadingVerse: "John 3:16",
    bibleReadingText: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
  });

  // Log a message to the console
  console.info('Seeded the Bulletin table');
  
  await db
  .insert(coverpage)
  .values({
    imageUrl: "https://picsum.photos/id/24/560/315",
  });

  console.info('Seeded the coverpage table');
}
