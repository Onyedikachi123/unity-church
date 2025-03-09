import { db, desc, eq, Bulletin } from 'astro:db'

// get bulletins
export async function getBulletins() {
    const bulletins = await db
        .select()
        .from(Bulletin)
        .orderBy(desc(Bulletin.sermonDate))

    return bulletins
}

export default async function getBulletin(slug: any): Promise<typeof Bulletin> {
    let bulletins: any[] = []

    if (slug) {
        bulletins = await db
            .select()
            .from(Bulletin)
            .orderBy(desc(Bulletin.sermonDate))
            .where(eq(Bulletin.slug, slug))
            .limit(1)
    } else {
        bulletins = await db
            .select()
            .from(Bulletin)
            .orderBy(desc(Bulletin.sermonDate))
            .limit(1)
    }

    const bulletin = Object.assign({}, ...bulletins)
    return bulletin
}

// return date formatted as dd-mm-yyyy
export function getslug(date: Date): string {
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
}
