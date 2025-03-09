import { defineAction, z } from 'astro:actions'
import { Bulletin, db, eq, desc, coverpage } from 'astro:db'

export const server = {
  bulletin: {
    find: defineAction({
      input: z.object({ slug: z.string() }),
      handler: async ({ slug }: { slug: string }) => {
        const bulletin = await db
          .select()
          .from(Bulletin)
          .where(eq(Bulletin.slug, slug))
        return bulletin
      }
    }),

    create: defineAction({
      accept: 'form',
      input: z.object({
        coverImageUrl: z.string(),
        sermonDate: z.string(),
        serviceType: z.string(),
        sermonPreacher: z.string(),
        bibleReadingVerse: z.string(),
        bibleReadingText: z.string(),
        bibleVersion: z.string(),
        firstHymnTitle: z.string(),
        firstHymnLyrics: z.string(),
        secondHymnTitle: z.string(),
        secondHymnLyrics: z.string(),
        thirdHymnTitle: z.string(),
        thirdHymnLyrics: z.string(),
        fourthHymnTitle: z.string(),
        fourthHymnLyrics: z.string(),
        fifthHymnTitle: z.string(),
        fifthHymnLyrics: z.string(),
        sixthHymnTitle: z.string(),
        sixthHymnLyrics: z.string(),
        seventhHymnTitle: z.string(),
        seventhHymnLyrics: z.string(),
        eighthHymnTitle: z.string(),
        eighthHymnLyrics: z.string(),
        ninethHymnTitle: z.string(),
        ninethHymnLyrics: z.string(),
        closingHymnTitle: z.string(),
        closingHymnLyrics: z.string(),
        announcements: z.string(),
        birthdays: z.string()
      }),
      handler: async ({
        coverImageUrl,
        sermonDate,
        serviceType,
        sermonPreacher,
        bibleReadingVerse,
        bibleReadingText,
        bibleVersion,
        firstHymnTitle,
        firstHymnLyrics,
        secondHymnTitle,
        secondHymnLyrics,
        thirdHymnTitle,
        thirdHymnLyrics,
        fourthHymnTitle,
        fourthHymnLyrics,
        fifthHymnTitle,
        fifthHymnLyrics,
        sixthHymnTitle,
        sixthHymnLyrics,
        seventhHymnTitle,
        seventhHymnLyrics,
        eighthHymnTitle,
        eighthHymnLyrics,
        ninethHymnTitle,
        ninethHymnLyrics,
        closingHymnTitle,
        closingHymnLyrics,
        announcements,
        birthdays
      }: {
        coverImageUrl: string
        sermonDate: string
        serviceType: string
        sermonPreacher: string
        bibleReadingVerse: string
        bibleReadingText: string
        bibleVersion: string
        firstHymnTitle: string
        firstHymnLyrics: string
        secondHymnTitle: string
        secondHymnLyrics: string
        thirdHymnTitle: string
        thirdHymnLyrics: string
        fourthHymnTitle: string
        fourthHymnLyrics: string
        fifthHymnTitle: string
        fifthHymnLyrics: string
        sixthHymnTitle: string
        sixthHymnLyrics: string
        seventhHymnTitle: string
        seventhHymnLyrics: string
        eighthHymnTitle: string
        eighthHymnLyrics: string
        ninethHymnTitle: string
        ninethHymnLyrics: string
        closingHymnTitle: string
        closingHymnLyrics: string
        announcements: string
        birthdays: string
      }) => {
        await db.insert(Bulletin).values({
          coverImageUrl,
          sermonDate: new Date(sermonDate),
          serviceType,
          sermonPreacher,
          bibleReadingVerse,
          bibleReadingText,
          bibleVersion,
          firstHymnTitle,
          firstHymnLyrics,
          secondHymnTitle,
          secondHymnLyrics,
          thirdHymnTitle,
          thirdHymnLyrics,
          fourthHymnTitle,
          fourthHymnLyrics,
          fifthHymnTitle,
          fifthHymnLyrics,
          sixthHymnTitle,
          sixthHymnLyrics,
          seventhHymnTitle,
          seventhHymnLyrics,
          eighthHymnTitle,
          eighthHymnLyrics,
          ninethHymnTitle,
          ninethHymnLyrics,
          closingHymnTitle,
          closingHymnLyrics,
          announcements,
          birthdays,
          slug: sermonDate
        })
        return { created: true }
      }
    }),

    update: defineAction({
      accept: 'form',
      input: z.object({
        slug: z.string(),
        coverImageUrl: z.string(),
        sermonDate: z.string(),
        serviceType: z.string(),
        sermonPreacher: z.string(),
        bibleReadingVerse: z.string(),
        bibleReadingText: z.string(),
        bibleVersion: z.string(),
        firstHymnTitle: z.string(),
        firstHymnLyrics: z.string(),
        secondHymnTitle: z.string(),
        secondHymnLyrics: z.string(),
        thirdHymnTitle: z.string(),
        thirdHymnLyrics: z.string(),
        fourthHymnTitle: z.string(),
        fourthHymnLyrics: z.string(),
        fifthHymnTitle: z.string(),
        fifthHymnLyrics: z.string(),
        sixthHymnTitle: z.string(),
        sixthHymnLyrics: z.string(),
        seventhHymnTitle: z.string(),
        seventhHymnLyrics: z.string(),
        eighthHymnTitle: z.string(),
        eighthHymnLyrics: z.string(),
        ninethHymnTitle: z.string(),
        ninethHymnLyrics: z.string(),
        closingHymnTitle: z.string(),
        closingHymnLyrics: z.string(),
        announcements: z.string(),
        birthdays: z.string()
      }),
      handler: async ({
        coverImageUrl,
        sermonDate,
        serviceType,
        sermonPreacher,
        bibleReadingVerse,
        bibleReadingText,
        bibleVersion,
        firstHymnTitle,
        firstHymnLyrics,
        secondHymnTitle,
        secondHymnLyrics,
        thirdHymnTitle,
        thirdHymnLyrics,
        fourthHymnTitle,
        fourthHymnLyrics,
        fifthHymnTitle,
        fifthHymnLyrics,
        sixthHymnTitle,
        sixthHymnLyrics,
        seventhHymnTitle,
        seventhHymnLyrics,
        eighthHymnTitle,
        eighthHymnLyrics,
        ninethHymnTitle,
        ninethHymnLyrics,
        closingHymnTitle,
        closingHymnLyrics,
        announcements,
        birthdays,
        slug
      }: {
        coverImageUrl: string
        sermonDate: string
        serviceType: string
        sermonPreacher: string
        bibleReadingVerse: string
        bibleReadingText: string
        bibleVersion: string
        firstHymnTitle: string
        firstHymnLyrics: string
        secondHymnTitle: string,
        secondHymnLyrics: string,
        thirdHymnTitle: string,
        thirdHymnLyrics: string,
        fourthHymnTitle: string,
        fourthHymnLyrics: string,
        fifthHymnTitle: string,
        fifthHymnLyrics: string,
        sixthHymnTitle: string,
        sixthHymnLyrics: string,
        seventhHymnTitle: string,
        seventhHymnLyrics: string,
        eighthHymnTitle: string,
        eighthHymnLyrics: string,
        ninethHymnTitle: string,
        ninethHymnLyrics: string,
        closingHymnTitle: string
        closingHymnLyrics: string
        announcements: string
        birthdays: string
        slug: string
      }) => {
        await db
          .update(Bulletin)
          .set({
            coverImageUrl,
            sermonDate: new Date(sermonDate),
            serviceType,
            sermonPreacher,
            bibleReadingVerse,
            bibleReadingText,
            bibleVersion,
            firstHymnTitle,
            firstHymnLyrics,
            secondHymnTitle,
            secondHymnLyrics,
            thirdHymnTitle,
            thirdHymnLyrics,
            fourthHymnTitle,
            fourthHymnLyrics,
            fifthHymnTitle,
            fifthHymnLyrics,
            sixthHymnTitle,
            sixthHymnLyrics,
            seventhHymnTitle,
            seventhHymnLyrics,
            eighthHymnTitle,
            eighthHymnLyrics,
            ninethHymnTitle,
            ninethHymnLyrics,
            closingHymnTitle,
            closingHymnLyrics,
            announcements,
            birthdays,
            slug: sermonDate
          })
          .where(eq(Bulletin.slug, slug))
        return { updated: true }
      }
    }),

    delete: defineAction({
      input: z.object({ slug: z.string() }),
      handler: async ({ slug }: { slug: string }) => {
        await db.delete(Bulletin).where(eq(Bulletin.slug, slug))
        return { deleted: true }
      }
    })
  },
  read_bulletin: defineAction({
    input: z.object({ id: z.number() }),
    handler: async ({ id }: { id: number }) => {
      const bulletin = await db
        .select()
        .from(Bulletin)
        .where(eq(Bulletin.id, id))
      return bulletin
    }
  }),
  read_bulletin_by_slug: defineAction({
    input: z.object({ slug: z.string() }),
    handler: async ({ slug }) => {
      let bulletin
      if (slug !== '') {
        bulletin = await db
          .select()
          .from(Bulletin)
          .orderBy(desc(Bulletin.sermonDate))
          .where(eq(Bulletin.slug, slug))
          .limit(1)
      } else {
        bulletin = await db
          .select()
          .from(Bulletin)
          .orderBy(desc(Bulletin.sermonDate))
          .limit(1)
      }
      return bulletin
    }
  }),
  read_bulletins: defineAction({
    handler: async () => {
      const bulletins = await db
        .select()
        .from(Bulletin)
        .orderBy(desc(Bulletin.sermonDate))
      return bulletins
    }
  }),
  create_coverpage: defineAction({
    accept: 'form',
    input: z.object({
      imageUrl: z.string()
    }),
    handler: async ({ imageUrl }: { imageUrl: string }) => {
      await db.insert(coverpage).values({
        imageUrl
      })
      return { coverpage }
    }
  }),
  read_coverpage: defineAction({
    input: z.object({ id: z.number() }),
    handler: async ({ id }: { id: number }) => {
      const page = await db.select().from(coverpage).where(eq(coverpage.id, id))
      return page
    }
  }),
  latest_coverpage: defineAction({
    handler: async () => {
      const pages = await db
        .select()
        .from(coverpage)
        .orderBy(desc(coverpage.id))
        .limit(1)
      return pages
    }
  }),
  update_coverpage: defineAction({
    accept: 'form',
    input: z.object({
      id: z.number(),
      imageUrl: z.string()
    }),
    handler: async ({ id, imageUrl }: { id: number; imageUrl: string }) => {
      await db.update(coverpage).set({ imageUrl }).where(eq(coverpage.id, id))
      return { updated: true }
    }
  })
}
