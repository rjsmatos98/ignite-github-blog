import styled from 'styled-components'

export const IssueContent = styled.div`
  max-width: 26rem;
  max-height: 16.25rem;

  padding: 2rem;
  border-radius: 10px;
  border: 1px solid transparent;

  background: ${(props) => props.theme['base-post']};

  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.blue};
    transition: border 0.2s;
  }

  div:first-child {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 1rem;

    h2 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  div:last-child {
    max-height: 6.6rem;
    overflow: hidden;

    img {
      max-width: 100%;
    }
  }
`
