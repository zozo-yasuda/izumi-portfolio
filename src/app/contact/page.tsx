const ContactPage: React.FC = () => {
  return (
    <div className="bg-offwhite h-screen pt-6 ">
      <div
        className="z-50 h-1/2 flex justify-center items-center mt-10"
        style={{
          backgroundImage: `url('/contactPage.png')`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative max-w-screen lg:py-4">
              <h1 className="text-lime text-6xl font-tomarik uppercase mb-4">
                let&apos;s connect!
              </h1>
              <p className="text-green font-sans leading-tight tracking-5">
                Email me at: yasuda.i@ufl.edu
                <br />
                Text me at: (561)339-0255
                <br />
                My LinkedIn: https://www.linkedin.com/in/izumi-yasuda/
              </p>
            </div>
          </div>
        </div>
  );
};

export default ContactPage;
