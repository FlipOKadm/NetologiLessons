import { Component } from 'react'
import { CustomNavBar } from '../../shared/CustomNavBar/CustomNavBar'
import classes from '../../components/rating/card.module.css'
import { FilmHolder } from '../../components/rating/FilmHolder'
import { IFilms } from '../../models/interface'
import { Card } from '../../components/rating/Card'

export default class Rating extends Component {
  render() {
    return (
      <>
      <CustomNavBar/>
      <div className={classes["item-list"]}>
        <FilmHolder
          render={(cards: IFilms[]) =>
            cards.map((card) => <Card key={card.id} item={card} />)
          }
        />
      </div>
      </>
    )
  }
}
