
const ContactPage: React.FC = () => {
    return (
        <div className="bg-offwhite h-screen">
        <div className="z-50"
            style={{
                backgroundImage: `url('/contactPage.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                width: '60vw'
            }}
        >
      <div className="my-auto mx-auto max-w-screen-xl lg:py-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          <div className="col-start-2 col-end-5">
            <br/>
            <br />
            <h1 className="pt-20 text-lime  text-6xl font-tomarik uppercase">
              let&apos;s connect!
            </h1>
            <br />
            <p className="text-green font-sans leading-tight tracking-5">
              Email me at: yasuda.i@ufl.edu
              <br />
              Text me at: (561)339-0255
              <br />
              My LinkedIn: https://www.linkedin.com/in/izumi-yasuda/
            </p>
            <br />
            <br />
          </div>
        </div>
        </div>
        </div>   
    </div>
    );
};

export default ContactPage;