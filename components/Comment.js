import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { useConnectedUserContext } from '/pages/_app'

export default function Comments({ comments, comment }) {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()

  if (comments && comments[0]) {
    console.log(comments)
    return (
      <div className="space-y-4">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            displayName={comment.user.displayName}
            content={comment.content}
            image={
              comment.user.profileImageUrl === ''
                ? '/images/default-pp.png'
                : comment.user.profileImageUrl
            }
            dateCreated={comment.dateCreated}
          />
        ))}
      </div>
    )
  } else {
    return null
  }
}

function Comment({ displayName, content, image, dateCreated }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4 relative">
        <span className="w-0.5 h-6 absolute left-5 top-10 bg-gray-500" />
        <img
          className="w-10 h-10 rounded-full"
          src={image}
          height="40"
          width="40"
          alt=""
        />
      </div>
      <div className="ml-3">
        <h4 className="font-semibold text-md">
          {displayName} ·{' '}
          <span className="text-sm text-gray-500">
            <time dateTime={dateCreated}>
              {dayjs(dateCreated)
                .locale('fr')
                .format('DD MMMM YYYY [à] HH[h]mm')}
            </time>
          </span>
        </h4>
        <p>{content}</p>
      </div>
    </div>
  )
}
