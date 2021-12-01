import fud from './fud.png';

export const Portfolio = () => {
    return(
        <div className="personalProj">
            <div className="personalProj-header">
                <span className="personalProj-title"> PersonalProjects</span>
                <span className="personalProj-fnStart"> () => </span>
                <span className="personalProj-curlyBracketTop">{'{'} </span>
            </div>

            <div className="personalProj-fud">
                <div >
                    <img src={fud} className="personalProj-pic" alt="fud" />
                </div>
                <div className="personalProj-text">
                    <p>
                        FüdPlan is a demo webapp that aims to provide an integrated suite of three practical food-related functionality areas: inventory management, recipe data organization, and shopping-cart operations. Keep track of expiration dates to minimize spoilage, see at a glance what recipes you can make with your current inventory, auto-add ingredients for a recipe you can almost make to your shopping cart, and more. Feel free to use the site as a sandbox to check out the feature set!
                    </p>

                    <p>
                        The motivation behind this project was the minor inconvenience I experienced while attempting to streamline cooking-and-eating processes for myself. I was able to find apps and sites that encompassed bits of the features I've mentioned above, but none that integrated all of them into one application—and especially none that did so for free, and with a charming minimalistic UI. I'm happy to say that FüdPlan has, in fact, greatly improved my day-to-day operations.
                    </p>
                </div>
            </div>

            <div>
                <span className="personalProj-curlyBracketBottom">{'}'}; </span>

            </div>
        </div>
    );
}
