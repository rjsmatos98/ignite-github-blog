import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'

import { IssueContent } from './styles'

interface IssueCardProps {
  id: number
  title: string
  created_at: string
  body: string
}

export function IssueCard({ id, title, created_at, body }: IssueCardProps) {
  const navigate = useNavigate()

  function handleReadEntireIssue() {
    navigate(`issue/${id}`)
  }

  return (
    <IssueContent onClick={handleReadEntireIssue}>
      <div>
        <h2>{title}</h2>
        <span>
          {created_at &&
            formatDistanceToNow(new Date(created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
        </span>
      </div>
      <div>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </IssueContent>
  )
}
