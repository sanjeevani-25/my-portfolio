import MySVG from "../assets/me-svg.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full bg-bgwhite h-screen flex flex-col items-center justify-center "
    >
      <div className="h-1/2 flex justify-center items-center">
        <img src={MySVG} alt="" className="h-3/4" />
      </div>
      <div className="w-full h-fit text-center flex flex-col gap-4">
        <p className="text-sm lg:text-base text-txtgrey">Hello, I'm</p>
        <h1 className="font-kaushan text-4xl lg:text-5xl font-bold text-txtblack">
          Sanjeevani <br />
          Lakade
        </h1>
        <div className="text-sm lg:text-base text-txtgrey px-16 lg:px-64">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis
          quasi explicabo quo totam suscipit, reprehenderit, cum quod
          voluptatibus modi tempora provident. Illum maxime esse consequuntur
          placeat nemo ratione reiciendis.
        </div>
      </div>
    </section>
  );
};
export default Home;
