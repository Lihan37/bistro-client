import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle heading="featured item "
            subHeading="check it out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                     <p className="uppercase">Where can I get some?</p>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo mollitia minus dicta, ut, quod similique tempora et enim expedita repudiandae suscipit temporibus quae sapiente recusandae voluptatibus, maxime blanditiis nemo quo nihil provident doloremque quos optio saepe sint! Dolor, reprehenderit! Maxime molestias dolorem adipisci! Harum nihil minima atque velit alias minus!</p>
                     <button className="btn btn-outline border-0 border-b-4">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;