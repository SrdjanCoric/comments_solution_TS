export interface BaseComment {
  id: string,
  author: string,
  body: string,
  postedAt: number
}

export interface Comment extends BaseComment {
  replies_count: number
  replies: Reply[]
}

export interface Reply extends BaseComment {
  comment_id: string
}