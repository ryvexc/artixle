import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blogname | Artixle',
  description: 'Username - Blogname',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
