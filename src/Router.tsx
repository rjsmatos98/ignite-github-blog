import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { GitHubBlog } from './pages/GitHubBlog'
import { Issue } from './pages/Issue'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<GitHubBlog />} />
        <Route path="/issue/:id" element={<Issue />} />
      </Route>
    </Routes>
  )
}
