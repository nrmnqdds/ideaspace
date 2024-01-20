import { ImageResponse } from 'next/og';
import { PrismaClient } from '@prisma/client';

// export const runtime = 'edge';

export async function GET(req: Request) {
    const prisma = new PrismaClient()
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const posts: any = id ? await prisma.idea.findUnique({ where: { id: id } }) : "Not found"

    console.log("here")
    console.log(id)
    console.log("here")
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 40,
                    color: 'black',
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    padding: '50px 200px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {posts ? posts.title : posts}
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}