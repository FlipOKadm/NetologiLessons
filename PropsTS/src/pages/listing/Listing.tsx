import { CardsHolder } from '../../components/card/CardsHolder'
import { Card } from '../../components/card/Card'
import { IProduct } from '../../models/interface'
import { CustomNavBar } from '../../shared/CustomNavBar/CustomNavBar'
import classes from "../../components/card/card.module.css";


export const Listing = () => (
  <>
    <CustomNavBar />
    <div className={classes["item-list"]}>
      <CardsHolder
        render={(cards: IProduct[]) =>
          cards.map((card) => <Card key={card.listing_id} item={card} />)
        }
      />
    </div>
  </>
);
