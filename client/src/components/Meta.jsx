import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Merry Mart",
  description: "we sell the best products for cheap",
  keyword: "wears, buy wears, buy bespoke, buy affordable, buy quality",
};
export default Meta;
