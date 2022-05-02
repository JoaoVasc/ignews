import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>teste</title>
      </Head>
      <main className={styles.mainContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>
            News about the <br />
            <span>React</span> world.
          </h1>
          <p>
            get access to all the publications <br />
            <span>for {props.product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await Stripe.prices.retrieve('price_1Kv2gPFJcXp4f1xFx06xmz8w', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,

  }

  return {
    props: {
      product,
    }
  }
};
