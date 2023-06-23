import s from './layout.module.css'

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={s.main}>{children}</main>;
}
