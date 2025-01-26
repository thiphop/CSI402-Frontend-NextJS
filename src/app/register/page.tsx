'use client';

import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  const registeration = () => {
    const emailInput = document.getElementById("email").value;

    if (!emailInput) {
      alert("กรุณาใส่ email");
      return;
    } else {
      alert("ID ของคุณคือ 1234");
      return;
    }
  };

  return (
    <div>
      <h1>สมัครสมาชิก</h1>
      <p>สำหรับบัญชีชั่วคราว</p>

      <input type="text" placeholder="กรอกอีเมล" id="email"/>
      <button onClick={registeration}>สมัครสมาชิก</button>
        <br />
      <button onClick={goToHome}>
        Back to Home
      </button>
    </div>
  );
}
