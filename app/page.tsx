import Image from "next/image";
import { Young_Serif, Outfit } from "next/font/google";
const youngSerif = Young_Serif({ weight: '400', subsets: ['latin'] });
const outfit = Outfit({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function Home() {

  return (
    <main className={`sm:max-w-[758px] sm:mx-auto bg-white sm:rounded-3xl p-0 sm:p-12 sm:my-[115px]`}>
      
      <Image src="/assets/images/image-omelette.jpeg" alt="" className={`sm:rounded-2xl`} width={1000} height={450} />

      <div className="px-7 sm:px-0">
        {/* Title */}
        <h1 className={`${youngSerif.className} text-4xl sm:text-[40px] mt-12 text-DarkCharcoal`}>Simple Omelette Recipe</h1>

        {/* Description */}
        <p className={`${outfit.className} text-WengeBrown mt-8`}>
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>

        {/* Preparation */}
        <div className={`py-4 px-6 rounded-2xl bg-[#FFF7FC] mt-8 ${outfit.className}`}>
          <h5 className={`text-DarkRaspberry text-xl font-semibold`}>Preparation time</h5>
          <ul className={`text-DarkRaspberry list-disc ps-5 py-3 space-y-2`}>
            <li className="ps-3"><span className="text-WengeBrown"><strong>Total:</strong> Approximately 10 minutes</span></li>
            <li className="ps-3"><span className="text-WengeBrown"><strong>Preparation:</strong> 10 minutes</span></li>
            <li className="ps-3"><span className="text-WengeBrown"><strong>Total:</strong> 10 minutes</span></li>
          </ul>
        </div>

        {/* Ingredients */}
        <div className={`border-b pb-8 mt-8 ${outfit.className}`}>
          <h3 className={`text-Nutmeg text-3xl ${youngSerif.className}`}>Ingredients</h3>
          <ul className={`text-Nutmeg list-disc pt-5 ps-5 py-3 space-y-2`}>
            <li className="ps-3"><span className="text-WengeBrown">2-3 large eggs</span></li>
            <li className="ps-3"><span className="text-WengeBrown">Salt, to taste</span></li>
            <li className="ps-3"><span className="text-WengeBrown">Pepper, to taste</span></li>
            <li className="ps-3"><span className="text-WengeBrown">1 tablespoon of butter or oil</span></li>
            <li className="ps-3"><span className="text-WengeBrown">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
          </ul>
        </div>

        {/* Instructions */}
        <div className={`border-b pb-8 mt-8 ${outfit.className}`}>
          <h5 className={`text-Nutmeg text-3xl ${youngSerif.className}`}>Instructions</h5>
          <ul className={`text-Nutmeg list-decimal pt-5 ps-5 py-3 space-y-2 marker:font-semibold`}>
            <li className="ps-3"><span className="text-WengeBrown"><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk for a fluffier texture.</span></li>

            <li className="ps-3"><span className="text-WengeBrown"><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</span></li>

            <li className="ps-3"><span className="text-WengeBrown"><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface.</span></li>

            <li className="ps-3"><span className="text-WengeBrown"><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the
              middle, sprinkle your chosen fillings over one half of the omelette.</span></li>

            <li className="ps-3"><span className="text-WengeBrown"><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a plate.</span></li>

            <li className="ps-3"><span className="text-WengeBrown"><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</span></li>
          </ul>
        </div>

        {/* Nutrition */}
        <div className={`mt-8 ${outfit.className}`}>
          <h5 className={`text-Nutmeg text-3xl ${youngSerif.className}`}>Nutrition</h5>
          <p className={`text-WengeBrown  pt-5`}>The table below shows nutritional values per serving without the additional fillings.</p>

          <table className={`text-WengeBrown w-full`}>
            <tbody className={`divide-y`}>
              <tr>
                <td className={`ps-5 py-3 w-1/2`}>Calories</td>
                <td className={`text-Nutmeg font-semibold`}>277kcal</td>
              </tr>
              <tr>
                <td className={`ps-5 py-3 w-1/2`}>Carbs</td>
                <td className={`text-Nutmeg font-semibold`}>0g</td>
              </tr>
              <tr>
                <td className={`ps-5 py-3 w-1/2`}>Protein</td>
                <td className={`text-Nutmeg font-semibold`}>20g</td>
              </tr>
              <tr>
                <td className={`ps-5 py-3 w-1/2`}>Fat</td>
                <td className={`text-Nutmeg font-semibold`}>22g</td>
              </tr>
            </tbody>
          </table>


        </div>

        <div className="attribution sm:hidden mt-16">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Ahtesham</a>.
        </div>

      </div>

    </main>
  );
}
