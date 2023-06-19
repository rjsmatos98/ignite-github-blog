import styled from 'styled-components'

export const ProfileContainer = styled.section`
  margin: -5rem auto 4.5rem;

  width: 100%;
  min-height: 13.25rem;
  padding: 2rem 2rem 2rem 2.5rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background: ${(props) => props.theme['base-profile']};

  display: flex;
  gap: 2rem;

  img {
    max-width: 9.25rem;
    max-height: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  h1 {
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div {
    margin-top: 1.5rem;

    display: flex;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`
