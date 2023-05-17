import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Powerful',
    Svg: require('@site/static/img/powerful.svg').default,
    description: (
      <>
        Our API enables developers to build tailored applications and integrations on top of the Niftyz platform.
      </>
    ),
  },
  {
    title: 'Versatile',
    Svg: require('@site/static/img/versatile.svg').default,
    description: (
      <>
        Monetize and tokenize any digital assets using NFTs with our ultimate solution for corporates and SMEs.
      </>
    ),
  },
  {
    title: 'Seamless',
    Svg: require('@site/static/img/seamless.svg').default,
    description: (
      <>
        Modular and multichain, making it applicable across diverse industries for seamless integration.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
