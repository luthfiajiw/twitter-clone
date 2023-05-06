import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/libs/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

async function serverAuth(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  console.log(`SESSION ${session}`)
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