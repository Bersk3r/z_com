"use client";

// import {redirect} from "next/navigation";

import {useRouter} from "next/navigation";
import styles from "@/app/page.module.css";
import Image from "next/image";
import zLogo from "../../../../public/zlogo.png";
import Link from "next/link";

export default function Login() {
    const router = useRouter(); // 클라이언트 컴포넌트에서 리다이렉트
    router.replace('/i/flow/login');
    return (
        <>
            <div className={styles.left}>
                <Image src={zLogo} alt="logo" />
            </div>
            <div className={styles.right}>
                <h1>지금 일어나고 있는 일</h1>
                <h2>지금 가입하세요.</h2>
                <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
                <h3>이미 트위터에 가입하셨나요?</h3>
                <Link href="/login" className={styles.login}>로그인</Link>
            </div>
        </>
    );
    // redirect('/i/flow/login'); // 서버 컴포넌트에서 리다이렉트
}

// router.push (뒤로 가기했을 때 바로 뒤로 이동)
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login

// router.replace (뒤로가기 했을 때, 바로 이전을 무시하고 뒤로 이동, 이전 히스토리를 삭제)
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login