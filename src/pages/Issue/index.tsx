import { NavLink, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

import { IssueContainer, IssueHeader } from './styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

import {
  ArrowSquareOut,
  Calendar,
  CaretCircleLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

export function Issue() {
  const { id } = useParams()

  const { userData, issueData } = useContext(BlogContext)

  const currentIssue = issueData.findIndex((issue) => issue.id === Number(id))

  const { body, comments, created_at, html_url, title } =
    issueData[currentIssue]

  return (
    <IssueContainer>
      <IssueHeader>
        <div>
          <NavLink to="/github-blog">
            <CaretCircleLeft size={16} weight="bold" />
            voltar
          </NavLink>

          <a href={html_url} target="_blank" rel="noreferrer">
            ver no github
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </div>

        <h1>{title}</h1>

        <div>
          <span>
            <GithubLogo size={16} weight="bold" /> {userData.login}
          </span>
          <span>
            <Calendar size={16} weight="fill" />
            {formatDistanceToNow(new Date(created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <ChatCircle size={16} weight="fill" /> {comments} comentários
          </span>
        </div>
      </IssueHeader>
      <div>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </IssueContainer>
  )
}
