"use client";

import styles from "./page.module.css";
import { useRouter } from 'next/navigation';

export default function Home() {

    const router = useRouter();

  const gotoRegis = () => {
    router.push('/register');
  }

  const gotologin = () => {
    const idInput = document.getElementById('idinput').value;

    if (!idInput) {
      alert("กรุณาใส่ ID");
      return;
    }

    if (idInput !== "1234") {
      alert("ID ไม่ถูกต้อง");
      return;
    }

    alert("เข้าสู่ระบบ");
    router.push('/login');
  };

  return (
    <div className={styles.page}>
      
      <h1>{"CSI402"}</h1>
      <h2>{"Login"}</h2>

      <p>Please Enter ID : <input type="text" id="idinput"/></p>

      <button type="button" onClick={gotologin}>Login</button>

      <p>หากไม่มีบัญชี กรุณากด <button type="button" onClick={gotoRegis}>Register</button> เพื่อลงทะเบียนใช้งานชั่วคราว</p>

    </div>
  );
}
