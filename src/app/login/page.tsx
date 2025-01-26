'use client';

import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>เข้าสู่ระบบสำเร็จ</h1>
      <button onClick={goToHome}>
        Back to Home
      </button>
    </div>
  );
}
