import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Username | Artixle',
  description: 'Username\'s Profile',
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
