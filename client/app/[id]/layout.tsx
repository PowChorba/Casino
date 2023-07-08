import s from './layout.module.css'

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={s.main}>{children}</main>;
}
