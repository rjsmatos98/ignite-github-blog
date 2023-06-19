import styled from 'styled-components'

export const IssueContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  max-width: 54rem;
  margin: 0 auto;
  padding-bottom: 2.5rem;

  & > div {
    padding: 2.5rem 2rem;

    img {
      max-width: 100%;

      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding-inline: 1rem;
  }
`

export const IssueHeader = styled.header`
  margin-top: -5.5rem;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      gap: 8px;

      font-weight: bold;
      color: ${(props) => props.theme.blue};
    }
  }

  h1 {
    color: ${(props) => props.theme['base-title']};

    font-size: 1.5rem;
    line-height: 130%;
  }

  div:last-child {
    margin-top: 8px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 8px;

      white-space: nowrap;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
