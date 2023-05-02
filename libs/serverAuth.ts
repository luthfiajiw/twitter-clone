import { getSession } from 'next-auth/react';
import { NextApiRequest } from 'next';

import prisma from '@/libs/prismadb';

async function serverAuth(req: NextApiRequest) {
  const session = await getSession({ req })

  if (!session?.user?.email) {
    throw new Error("Not Signed In")
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email
    }
  })

  if (!currentUser) {
    throw new Error("Not Signed In")
  }

  return { currentUser }
}

export default serverAuth