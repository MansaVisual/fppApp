type Props = { children: React.ReactNode}
import './globlas.css'

export default function RootLayout({ children}: Props) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
