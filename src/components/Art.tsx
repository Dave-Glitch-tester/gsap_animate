import { featureLists, goodLists } from "../../constant";

const Art = () => {
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">Best Design</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((features, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" />
                <p>{features}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              className="abs-center masked-img size-full object-contain"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((features, index) => (
              <li key={index} className="flex items-center gap-2 justify-start">
                <img src="/images/check.png" />
                <p className="md:w-full w-60">{features}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Art;
