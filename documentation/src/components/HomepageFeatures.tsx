import * as React from "react";
import clsx from "clsx";

import styles from "./HomepageFeatures.module.css";

interface IFeature {
  title: string;
  Svg: any;
  description: React.ReactElement<any>;
}

const FeatureList: IFeature[] = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

interface FeatureProps extends IFeature {}
const Feature: React.FC<FeatureProps> = ({
  Svg,
  title,
  description,
}: FeatureProps): React.ReactElement<FeatureProps> => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures: React.FC<{}> = (): React.ReactElement<{}> => {
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
};

export default HomepageFeatures;
