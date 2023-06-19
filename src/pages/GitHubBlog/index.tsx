import {
  BlogContainer,
  FormContainer,
  IssuesContainer,
  Publications,
} from './styles'

import { IssueCard } from '../../components/IssueCard'
import { Profile } from '../../components/Profile'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchIssueInputs = z.infer<typeof searchFormSchema>

export function GitHubBlog() {
  const { getIssues, issueData } = useContext(BlogContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    watch,
  } = useForm<SearchIssueInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssue(data: SearchIssueInputs) {
    getIssues(data.query)
    reset()
  }

  const query = watch('query')
  const isQueryEmpty = !query

  return (
    <BlogContainer>
      <Profile />

      <Publications>
        <h2>Publicações</h2>

        <FormContainer onSubmit={handleSubmit(handleSearchIssue)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
          <button disabled={isSubmitting || isQueryEmpty}>Buscar</button>
        </FormContainer>

        <IssuesContainer>
          {issueData[0].total_count !== 0 ? (
            issueData.map((issue) => {
              return (
                <IssueCard
                  key={issue.id}
                  id={issue.id}
                  body={issue.body}
                  title={issue.title}
                  created_at={issue.created_at}
                />
              )
            })
          ) : (
            <h2>Publicação não encontrada!</h2>
          )}
        </IssuesContainer>
      </Publications>
    </BlogContainer>
  )
}
