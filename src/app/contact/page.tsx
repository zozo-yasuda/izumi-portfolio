
const ContactPage: React.FC = () => {
    return (
        <div className="bg-offwhite h-screen">
        <div className="z-50"
            style={{
                backgroundImage: `url('/contactPage.png')`,
                backgroundSize: 'contain',
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                width: '50v'
            }}
        >
      <div className="my-auto mx-auto max-w-screen-xl lg:py-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
          <div className="col-start-3 col-end-4">
            <br/>
            <br />
            <h1 className="text-green text-xl font-sans uppercase">
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