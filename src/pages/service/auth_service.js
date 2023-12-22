const url = 'http://localhost:8000/';

export const authLoginApi = async (email, password) => {
        // 이메일과 비밀번호 유효성 검사 추가
        if (!email || !password) {
            console.error("이메일과 비밀번호를 모두 입력하세요.");
            return;
        }
        const reqUrl = `${url}user/login`;
        try {
            const response = await fetch(reqUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: email,
                    pw: password,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                alert("로그인 성공하였습니다.")
                console.log("로그인 성공", result);
                localStorage.setItem('AccessToken', result.result.AccessToken)
                localStorage.setItem('userId', result.result.userId)
            } else if (response.status === 404) {
                alert("아이디 또는 비밀번호가 일치하지 않습니다");
            } else {
                alert("입력값이 없습니다.");
            }
        } catch (error) {
            console.error(error);
        }
    };