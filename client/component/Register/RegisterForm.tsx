import s from "./Register.module.css";

export default function RegisterForm() {
  return (
    <>
      <input type="text" placeholder="Username" className={s.input} />
      <input type="email" placeholder="Email Address" className={s.input} />
      <input type="password" placeholder="Password" className={s.input} />
      <button className={s.buttonCreate} type="submit">Create Account</button>
    </>
  );
}
