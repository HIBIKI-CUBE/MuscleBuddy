import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    workouts: await prisma.Workouts.findMany({
      include: { Users: true },
    }),
  };
}) satisfies PageServerLoad;
