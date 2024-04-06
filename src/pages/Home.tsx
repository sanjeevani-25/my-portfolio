import MySVG from "../assets/me-svg.svg";

const Home = () => {
  return (
    <section
      id="home"
      class="w-full bg-bgwhite h-screen flex flex-col items-center justify-center "
    >
      <div class="h-1/2 flex justify-center items-center">
        <img src={MySVG} alt="" class="h-3/4" />
      </div>
      <div class="w-full h-fit text-center flex flex-col gap-4">
        <p class="text-sm lg:text-base text-txtgrey">Hello, I'm</p>
        <h1 class="text-2xl lg:text-4xl font-bold text-txtblack">
          Sanjeevani <br />
          Lakade
        </h1>
        <div class="text-sm lg:text-base text-txtgrey px-16 lg:px-64">
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
