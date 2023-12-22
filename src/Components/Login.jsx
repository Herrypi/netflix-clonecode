import React, { useState } from "react";
import styled from "styled-components";
import { authLoginApi } from "../pages/service/auth_service";

const Container = styled.div`
text-align: center;
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        authLoginApi(email, password).then(result =>{
            console.log(result);
        });
    };

    return (
        <Container>
            <h2>로그인</h2>
            <div className="line"></div>
            <form id="loginForm">
                <br />
                이메일 주소:
                <br />
                <br />
                <input
                    type="text"
                    className="id"
                    placeholder="이메일을 입력해주세요."
                    style={{ padding: "0vw 0.5vw", width: "15vw", height: "2vw" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                비밀번호:
                <br />
                <br />
                <input
                    type="password"
                    className="pw"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                    style={{ padding: "0vw 0.5vw", width: "15vw", height: "2vw" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="button"
                    value="확인"
                    style={{
                        backgroundColor: "#0d253f",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 20px",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                    }}
                    onClick={handleLogin}
                />
                <br />
                <br />
            </form>
            <div className="others">
                <br />
                회원가입
                <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                아이디/비밀번호 찾기
            </div>
        </Container>
    );
};

export default Login;
