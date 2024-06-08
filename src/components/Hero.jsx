// import { CardComponents } from "/src/Cards/CardComponents";
import video from '../assets/videos/2.mp4'

export default function Hero() {
  return (
    <>
      <div className='flex'>
        <div>
          <div className=" text-6xl font-bold mt-32 ml-4   font-serif">
            Travel and feel <br />
            your favorite <br />
            place
          </div>

          <p className="ml-4 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab
            ipsa <br />
            quo, blanditiis quam cupiditate dolorum sequi tenetur, magni vel rem{" "}
            <br />
            aperiam quia velit libero corporis molestiae vero accusantium iste
            ad <br />
            dolorem?
          </p>
        </div>
        <div className="mt-6">
          <a
            href="https://booking.com"
            target="_blank"
            className="px-4 py-1  font-semibold rounded-md bg-orange-500 hover:shadow-lg active:bg-orange-400  ml-4"
          >
            Explore
          </a>
        </div>

        <div>
          <video src="2.mp4">{video}</video>
        </div>
      </div>
    </>
  );
}
