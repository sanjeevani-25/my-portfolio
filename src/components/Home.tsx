import MySVG from "../assets/me-svg.svg";

const Home = () => {
  return (
    <div id="home" class="h-screen w-screen">
      <div class="h-24 ">
        <img src={MySVG} alt="" class="mx-auto" />
      </div>
    </div>
  );
};
export default Home;
