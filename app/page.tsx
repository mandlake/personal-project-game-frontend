"use client";

import axios from "axios";
import { useState } from "react";
import Link from "next/link";

const SERVER = "http://localhost:8080";

export default function Home() {
  const [name, setName] = useState("");
  const url = `${SERVER}/name`;
  const data = { name: name };
  const config = {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Bearer blah ~`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    alert(name + "님 안녕하세요.");
    axios.post(url, data, config).then((res) => {
      alert(JSON.stringify(res.data) + "님의 계정이 존재합니다.");
    });
  };

  return (
    <>
      <h1>Welcome To React World !!!</h1>
      <input type="type" onChange={handleChange} />
      <br />
      <button onClick={handleClick}>클릭</button>
    </>
  );
}
