export interface BaseComment {
  author: string,
  body: string,
}

export interface Comment extends BaseComment {
  id: string,
  replies_count: number
  replies: Reply[]
  postedAt: number
}

export interface Reply extends BaseComment {
  id: string,
  comment_id: string
  postedAt: number
}