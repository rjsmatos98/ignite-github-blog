import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  max-width: 54rem;
  margin: 0 auto;
  padding-bottom: 2.5rem;

  @media (max-width: 768px) {
    padding-inline: 1rem;
  }
`

export const Publications = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;

    margin-bottom: 0.75rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
  gap: 8px;

  height: 3.125rem;
  margin-bottom: 3rem;

  input {
    flex: 1;
    padding: 0.75rem 1rem;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  button {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-label']};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s;
    }
  }
`

export const IssuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
