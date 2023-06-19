import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

import { ProfileContainer, ProfileData } from './styles'

export function Profile() {
  const { userData } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <img src={userData.avatar_url} alt="" />
      <ProfileData>
        <h1>
          {userData.name}
          <a
            href={`https://github.com/${userData.login}`}
            target="_blank"
            rel="noreferrer"
          >
            github <ArrowSquareOut />
          </a>
        </h1>
        <p>{userData.bio}</p>
        <div>
          <span>
            <GithubLogo size={14} weight="bold" />
            {userData.login}
          </span>

          <span>
            <Users size={14} weight="bold" />
            {userData.followers} seguidores
          </span>
        </div>
      </ProfileData>
    </ProfileContainer>
  )
}
