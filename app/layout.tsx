import './globals.css'
export const metadata = {
  title: 'Wine Store 20194884',
  description: 'A bullshit online wine store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
