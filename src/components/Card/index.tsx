import { Buy } from '../Buy'
import { CardContainer, TagsContainer } from './styles'

export interface CoffeeProps {
  createdAt: string
  name: string
  description: string
  price: number
  tags: Array<String>
  imageUrl: string
  available: boolean
}

export function Card(props: CoffeeProps) {
  return (
    <CardContainer>
      <img src={props.imageUrl} alt={props.name} />

      <TagsContainer>
        {props.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>

      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Buy />
    </CardContainer>
  )
}
