"use client";

import { useState } from "react";

const Join = () => {
  const [join, setJoin] = useState({
    name: "",
    id: "",
    pw: "",
    phoneNum: "",
  });

  const handleName = (e: any) => {
    setJoin({ ...join, name: e.target.value });
  };

  const handleId = (e: any) => {
    setJoin({ ...join, id: e.target.value });
  };

  const handlePw = (e: any) => {
    setJoin({ ...join, pw: e.target.value });
  };

  const handlePhoneNum = (e: any) => {
    setJoin({ ...join, phoneNum: e.target.value });
  };

  const handleSubmit = () => {
    alert();
  };

  return (
    <>
      <h3>회원가입</h3>
      <p>이름</p>
      <input type="text" onChange={handleName} />
      <p>아이디</p>
      <input type="text" onChange={handleId} />
      <p>비밀번호</p>
      <input type="text" onChange={handlePw} />
      <p>전화번호</p>
      <input type="text" onChange={handlePhoneNum} />
      <br />
      <br />
      <button onClick={handleSubmit}>회원가입</button>
    </>
  );
};

export default Join;
