import { User } from 'entities/User'
import { type } from 'os'

export enum ArticleType {
    IT = 'IT',
    ECONIMICS = 'ECONIMICS',
    SCIENCE = 'SCIENCE'
}
export enum ArticleBlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE'
}

export interface ArticleBase {
    id: string,
    type: string
}
export interface ArticleText extends ArticleBase {
    type: ArticleBlockType.TEXT
    title?: string,
    paragraphs: string[]
}
export interface ArticleCode extends ArticleBase {
    type: ArticleBlockType.CODE
    code: string,
}
export interface ArticleImage extends ArticleBase {
    type: ArticleBlockType.IMAGE
    src: string,
    title: string
}

export type ArticleBlock = ArticleText | ArticleCode | ArticleImage

export interface Articles {
    id: string,
      title: string,
      subtitle: string,
      img: string,
      user: User,
      views: number,
      createdAt: string,
      type: ArticleType[],
      blocks: ArticleBlock[]
}

export interface ArticlesSchema {
    data?: Articles,
    isLoad?: boolean,
    error?: string
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}
