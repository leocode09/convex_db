"use client"
import { useMutation } from "convex/react";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

export default function Home() {

  const [text, setText] = useState('')
  const createDay = useMutation(api.days.createDay)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <form onSubmit={e => {
          e.preventDefault()
        }}>
          <input value={text} onChange={e => setText(e.target.value)}/>
          <button>create</button>
        </form>
      </div>
    </main>
  );
}
