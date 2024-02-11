import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    workouts: await prisma.workouts.findMany({
      include: { Users: true },
    }),
  };
}) satisfies PageServerLoad;
