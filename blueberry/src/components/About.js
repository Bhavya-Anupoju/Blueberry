const About = () => {
  return (
    <div className="flex items-center justify-center h-[350px]">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">About Us</h1>
        <div className="text-lg">
          <div className="p-2">
            Welcome to <span className="font-semibold">Blueberry</span>, where
            delicious food and convenience come together to create an
            exceptional dining experience
          </div>
          <div className="p-2">
            Our Mission At <span className="font-semibold">Blueberry</span> is
            simple: to bring your favorite meals right to your doorstep with
            just a few taps. We believe that enjoying great food should be
            effortless, and our platform is designed to make ordering and
            discovering new dishes as seamless as possible.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
