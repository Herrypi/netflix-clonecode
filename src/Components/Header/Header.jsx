import React from 'react'
import * as S from './Header.styled';



const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderBarUl>
        <S.HeaderBarItem>
          <S.HeaderBarLink to={'/'}>
            <S.LogoIcon
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </S.HeaderBarLink>
        </S.HeaderBarItem>
        
        <S.HeaderBarItem>
          <S.HeaderBarLink to={`/movie`}>
            영화
          </S.HeaderBarLink>
        </S.HeaderBarItem>

        <S.HeaderBarItem>
          <S.HeaderBarLink to={`/tv`}>
            TV프로그램
          </S.HeaderBarLink>
        </S.HeaderBarItem>
        <S.HeaderBarItem>
          <S.HeaderBarLink to={`/celebrity`}>
            인물
          </S.HeaderBarLink>
        </S.HeaderBarItem>
        <S.HeaderBarItem>
          <S.HeaderBarLink to={`/login`}>
            login
          </S.HeaderBarLink>
        </S.HeaderBarItem>
      </S.HeaderBarUl>
    </S.HeaderContainer>
  )
}
export default Header;

