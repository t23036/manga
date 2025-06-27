import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header style={{ padding: '10px', background:'#fff'}}>
      <nav>
       <Link href="/">入力検索</Link> |{' '}
       <Link href="/access">検索結果</Link> |{' '}
       <Link href="/syoukai">紹介ページ</Link> |{' '}
      </nav>
    </header>
  );
}
