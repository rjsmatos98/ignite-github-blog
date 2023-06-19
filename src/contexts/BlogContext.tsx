import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { searchApi, userApi } from '../lib/axios'

interface UserDataProps {
  avatar_url: string
  bio: string
  followers: number
  login: string
  name: string
}

export interface IssueDataProps {
  id: number
  title: string
  body: string
  comments: number
  created_at: string
  html_url: string
  total_count?: number
}

interface BlogContextType {
  userData: UserDataProps
  issueData: IssueDataProps[]
  getIssues: (query?: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [userData, setUserData] = useState<UserDataProps>({
    avatar_url: '',
    bio: '',
    followers: 0,
    login: '',
    name: '',
  })

  const issueDataEmpty = useMemo(() => {
    return [
      {
        id: 0,
        title: '',
        body: '',
        comments: 0,
        created_at: '',
        html_url: '',
        total_count: 0,
      },
    ]
  }, [])

  const [issueData, setIssueData] = useState<IssueDataProps[]>(issueDataEmpty)

  async function getUserData() {
    const response = await userApi.get('/diego3g')

    const { avatar_url, bio, followers, login, name } = response.data

    setUserData({ avatar_url, bio, followers, login, name })
  }

  const getIssues = useCallback(
    async (query?: string) => {
      const response = await searchApi.get('/issues', {
        params: {
          q: `${!query ? '' : query} repo:diego3g/responsive-native`,
        },
      })

      const { total_count } = response.data

      if (total_count !== 0) {
        const APIDataIssue: IssueDataProps[] = []

        response.data.items.map((item: IssueDataProps) => {
          const { id, title, body, comments, created_at, html_url } = item

          return APIDataIssue.push({
            id,
            title,
            body,
            comments,
            created_at,
            html_url,
          })
        })

        return setIssueData(APIDataIssue)
      }

      setIssueData(issueDataEmpty)
    },
    [issueDataEmpty],
  )

  useEffect(() => {
    getUserData()
    getIssues()
  }, [getIssues])

  return (
    <BlogContext.Provider value={{ userData, issueData, getIssues }}>
      {children}
    </BlogContext.Provider>
  )
}
